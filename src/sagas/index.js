import {fork} from 'redux-saga/effects';
import app from './app';
import icons from './icons';
import history from './history';

// main saga generators
export function* sagas() {
  yield fork(app);
  yield fork(icons);
  yield fork(history);
}
