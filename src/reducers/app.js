import {APP_SELECT_ICON} from "../actions/app";
import {ICONS_CREATE, ICONS_DELETE} from "../actions/icons";

const initialState = {
  currentIconUuid: '',
};

export default (state, action) => {
  switch (action.type) {
    case APP_SELECT_ICON:
    case ICONS_CREATE:
      return {...state, currentIconUuid: action.uuid};
    default:
      return state || initialState;
  }
};
