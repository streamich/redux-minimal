import {delay} from 'redux-saga';
import {fork, take, select, call, cancel, takeEvery, put} from 'redux-saga/effects';
import {APP_IMPORT_ICON, selectIcon, loadState} from '../actions/app';
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

const loadFromLocalStorage = function* () {
  try {
    const json = yield call([localStorage, localStorage.getItem], 'STATE');

    if (json) {
      const state = JSON.parse(json);

      yield put(loadState(state));
    }
  } catch (error) {}
};

export default function * () {
  yield fork(loadFromLocalStorage);
  yield fork(persistToLocalStorage);
  yield fork(watchImportIcon);
};
