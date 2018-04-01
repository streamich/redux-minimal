import {
  HISTORY_PUSH,
  HISTORY_PREV,
  HISTORY_NEXT,
} from "../actions/history";

const LIMIT = 50;

export default (state, action) => {
  switch (action.type) {
    case HISTORY_PUSH:
      const {icon} = action;
      const {uuid} = icon;
      const history = state[uuid] || {};
      let {index = -1, list = []} = history;

      list = list.slice(0, index + 1);

      if (list.length >= LIMIT) {
        list = list.slice(list.length - LIMIT + 1);
      }

      return {
        ...state,
        [uuid]: {
          index: list.length,
          list: [...list, icon],
        }
      };
    case HISTORY_PREV: {
      const history = state[action.uuid];

      if (!history) {
        return state;
      }

      if (!history.index || (history.index < 0)) {
        return state;
      }

      return {
        ...state,
        [action.uuid]: {
          ...history,
          index: history.index - 1,
        }
      };
    }
    case HISTORY_NEXT: {
      const history = state[action.uuid];

      if (!history) {
        return state;
      }

      if (history.index >= history.list.length - 1) {
        return state;
      }

      return {
        ...state,
        [action.uuid]: {
          ...history,
          index: history.index + 1,
        }
      };
    }
    default:
      return state || {};
  }
};
