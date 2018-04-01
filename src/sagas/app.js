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

export default function * () {
  yield fork(watchImportIcon);
};
