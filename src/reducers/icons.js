import {ICONS_CREATE, ICONS_RENAME, ICONS_TAG_ADD, ICONS_TAG_REMOVE} from "../actions/icons";

let cnt = 1;

export default (state, action) => {
  let icon;

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
      icon = state[action.uuid];

      if (!icon) {
        return state;
      }

      return {...state, [action.uuid]: {...icon, name: action.name}};
    case ICONS_TAG_ADD:
      if (!action.tag) {
        return state;
      }

      icon = state[action.uuid];

      if (!icon) {
        return state;
      }

      return {
        ...state,
        [action.uuid]: {
          ...icon,
          tags: {
            ...icon.tags, 
            [action.tag]: true
          }
        }
      };
    case ICONS_TAG_REMOVE:
      icon = state[action.uuid];

      if (!icon) {
        return state;
      }

      const {[action.tag]: omit, ...tags} = icon.tags;

      return {
        ...state,
        [action.uuid]: {
          ...icon,
          tags
        }
      };
    default:
      return state || {};
  }
};
