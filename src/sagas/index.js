import {fork} from 'redux-saga/effects';
import icons from './icons';

// main saga generators
export function* sagas() {
  yield fork(icons);
}
