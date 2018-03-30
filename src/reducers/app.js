import {APP_SELECT_ICON} from "../actions/app";

const initialState = {
  currentIconUuid: '',
};

export default (state, action) => {
  switch (action.type) {
    case APP_SELECT_ICON:
      return {...state, currentIconUuid: action.uuid};
    default:
      return state || initialState;
  }
};
