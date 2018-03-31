import {
  HISTORY_PUSH
} from "../actions/history";


export default (state, action) => {
  switch (action.type) {
    case HISTORY_PUSH:
      const {icon} = action;
      const {uuid} = icon;
      const history = state[uuid] || {};
      const {index = -1, list = []} = history;

      return {
        ...state,
        [uuid]: {
          index: index + 1,
          list: [...list, icon],
        }
      };
    default:
      return state || {};
  }
};
