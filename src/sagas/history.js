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
  yield call(delay, 500);

  const icon = yield select(getIcon, uuid);

  yield put(historyPush(icon));
};

const watchHistoriEvents = function* () {
  let task;

  while (true) {
    const action = yield take([
      ICONS_CREATE,
      ICONS_RENAME,
      ICONS_TAG_ADD,
      ICONS_TAG_REMOVE,
      ICONS_SET_COLOR,
      ICONS_SELECT_COLOR,
      ICONS_PUT_COLOR,
    ]);

    if (task) {
      yield cancel(task);
    }

    task = yield fork(pushIntoHistory, action);
  }
};

export default function * () {
  yield fork(watchHistoriEvents);
};
