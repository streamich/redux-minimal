import {delay} from 'redux-saga';
import {fork, take, select, call, cancel, takeEvery, put} from 'redux-saga/effects';
import {ICONS_PUT_COLOR, ICONS_DELETE} from '../actions/icons';
import {APP_SELECT_ICON, APP_IMPORT_ICON, selectIcon} from '../actions/app';
import {getIcon, getIcons} from '../selectors';
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

const selectSomeIcon = function* () {
  const icons = yield select(getIcons);

  for (const uuid in icons) {
    yield put(selectIcon(uuid));
    break;
  }
};

const watchIconDelete = function* () {
  yield takeEvery(ICONS_DELETE, selectSomeIcon);
};

export default function * () {
  yield fork(watchPutColorForFaviconRefresh);
  yield fork(watchIconDelete);
};
