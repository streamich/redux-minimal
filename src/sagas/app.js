import {delay} from 'redux-saga';
import {fork, take, select, call, cancel, takeEvery, put} from 'redux-saga/effects';
import {APP_IMPORT_ICON, selectIcon} from '../actions/app';
import {iconPut} from '../actions/icons';

const importIcon = function* ({icon}) {
  yield put(iconPut(icon));
  yield put(selectIcon(icon.uuid));
};

const watchImportIcon = function* () {
  yield takeEvery(APP_IMPORT_ICON, importIcon);
};

const persistState = function* () {
  yield call(delay, 250);

  const state = yield select(state => state);

  try {
    const json = JSON.stringify(state);

    yield call([localStorage, localStorage.setItem], 'STATE', json);
  } catch (error) {}
};

const persistToLocalStorage = function* () {
  let task;

  while (true) {
    const action = yield take('*');

    if (task) {
      yield cancel(task);
    }

    task = yield fork(persistState);
  }
};

export default function * () {
  yield fork(watchImportIcon);
  yield fork(persistToLocalStorage);
};
