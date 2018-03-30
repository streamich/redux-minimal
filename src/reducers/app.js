import {APP_SELECT_ICON} from "../actions/app";
import {ICONS_CREATE} from "../actions/icons";

const initialState = {
  currentIconUuid: '',
};

export default (state, action) => {
  switch (action.type) {
    case APP_SELECT_ICON:
      return {...state, currentIconUuid: action.uuid};
    case ICONS_CREATE:
      return {currentIconUuid: action.uuid};
    default:
      return state || initialState;
  }
};
