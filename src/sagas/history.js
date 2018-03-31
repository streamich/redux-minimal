import {delay} from 'redux-saga';
import {fork, take, select, call, cancel, takeEvery, put} from 'redux-saga/effects';
import {historyPush} from '../actions/history';
import {
  ICONS_CREATE,
  ICONS_RENAME,
  ICONS_TAG_ADD,
  ICONS_TAG_REMOVE,
  ICONS_SET_COLOR,
  ICONS_SELECT_COLOR,
  ICONS_PUT_COLOR
} from '../actions/icons';
import { getIcon } from '../selectors';

const pushIntoHistory = function* ({uuid}) {
  const icon = yield select(getIcon, uuid);

  yield put(historyPush(icon));
};

const watchHistoriEvents = function* () {
  yield takeEvery([
    ICONS_CREATE,
    ICONS_RENAME,
    ICONS_TAG_ADD,
    ICONS_TAG_REMOVE,
    ICONS_SET_COLOR,
    ICONS_SELECT_COLOR,
    ICONS_PUT_COLOR,
  ], pushIntoHistory);
};

export default function * () {
  yield fork(watchHistoriEvents);
};
