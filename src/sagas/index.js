import {fork} from 'redux-saga/effects';
import icons from './icons';
import history from './history';

// main saga generators
export function* sagas() {
  yield fork(icons);
  yield fork(history);
}
