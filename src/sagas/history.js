import {delay} from 'redux-saga';
import {fork, take, select, call, cancel, takeEvery, put} from 'redux-saga/effects';
import {historyPush, HISTORY_PREV, HISTORY_NEXT} from '../actions/history';
import {
  ICONS_CREATE,
  ICONS_RENAME,
  ICONS_TAG_ADD,
  ICONS_TAG_REMOVE,
  ICONS_SET_COLOR,
  ICONS_SELECT_COLOR,
  ICONS_PUT_COLOR,
  iconPut
} from '../actions/icons';
import {getIcon, getIconHistoryState} from '../selectors';

const pushIntoHistory = function* ({uuid}) {
  yield call(delay, 500);

  const icon = yield select(getIcon, uuid);

  yield put(historyPush(icon));
};

const watchHistoricEvents = function* () {
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

const watchHistoryNavigation = function* () {
  while (true) {
    const action = yield take([
      HISTORY_PREV,
      HISTORY_NEXT,
    ]);

    const icon = yield select(getIconHistoryState, action.uuid);

    if (icon) {
      yield put(iconPut(icon));
    }
  }
};

export default function * () {
  yield fork(watchHistoricEvents);
  yield fork(watchHistoryNavigation);
};
