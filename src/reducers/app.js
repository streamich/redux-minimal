import {APP_LOAD_INITIAL_STATE, APP_SELECT_ICON} from "../actions/app";
import {ICONS_CREATE, ICONS_DELETE} from "../actions/icons";

const initialState = {
  currentIconUuid: '',
};

export default (state, action) => {
  switch (action.type) {
    case APP_LOAD_INITIAL_STATE:
      return action.state.app;
    case APP_SELECT_ICON:
    case ICONS_CREATE:
      return {...state, currentIconUuid: action.uuid};
    default:
      return state || initialState;
  }
};
