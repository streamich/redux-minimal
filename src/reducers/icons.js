import {ICONS_CREATE, ICONS_RENAME} from "../actions/icons";

let cnt = 1;

export default (state, action) => {
  switch (action.type) {
    case ICONS_CREATE:
      return {...state, [action.uuid]: {
        uuid: action.uuid,
        name: action.name || ('Unnamed ' + (cnt++)),
        tags: {},
        pixels: {},
        colors: [],
      }};
    case ICONS_RENAME:
      const icon = state[action.uuid];

      if (!icon) {
        return state;
      }

      return {...state, [action.uuid]: {...icon, name: action.name}};
    default:
      return state || {};
  }
};
