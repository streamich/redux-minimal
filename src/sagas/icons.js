import {delay} from 'redux-saga';
import {fork, take, select, call, cancel} from 'redux-saga/effects';
import {ICONS_PUT_COLOR} from '../actions/icons';
import {APP_SELECT_ICON} from '../actions/app';
import {getIcon} from '../selectors';
import changeFavicon from '../api/changeFavicon';
import pixelsToUrl from '../api/pixelsToUrl';

const refreshFavicon = function* (pixels) {
  yield call(delay, 200);
  yield call(changeFavicon, yield call(pixelsToUrl, pixels));
};

const watchPutColorForFaviconRefresh = function* () {
  let task;

  while (true) {
    const {uuid} = yield take([
      ICONS_PUT_COLOR,
      APP_SELECT_ICON,
    ]);
    const icon = yield select(getIcon, uuid);

    if (task) {
      yield cancel(task);
    }

    task = yield fork(refreshFavicon, icon.pixels);
  }
};

export default function * () {
  yield fork(watchPutColorForFaviconRefresh);
};
