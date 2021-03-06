import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import app from './app';
import icons from './icons';
import history from './history';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  app,
  icons,
  history,
});
