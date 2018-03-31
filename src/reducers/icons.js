import {
  ICONS_CREATE, 
  ICONS_RENAME, 
  ICONS_TAG_ADD, 
  ICONS_TAG_REMOVE, 
  ICONS_SET_COLOR,
  ICONS_SELECT_COLOR,
} from "../actions/icons";

let cnt = 1;

const patchIcon = (state, uuid, getPatch) => {
  const icon = state[uuid];

  if (!icon) {
    return state;
  }

  return {
    ...state,
    [uuid]: {
      ...icon,
      ...getPatch(icon),
    }
  };
};

export default (state, action) => {
  let icon;

  switch (action.type) {
    case ICONS_CREATE:
      return {...state, [action.uuid]: {
        uuid: action.uuid,
        name: action.name || ('Unnamed ' + (cnt++)),
        tags: {},
        pixels: {},
        colorIndex: -1,
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
    case ICONS_SET_COLOR:
      icon = state[action.uuid];

      if (!icon) {
        return state;
      }

      const colors = [...icon.colors];

      colors[action.index] = action.color;

      return {
        ...state,
        [action.uuid]: {
          ...icon,
          colors
        }
      };
    case ICONS_SELECT_COLOR:
      return patchIcon(state, action.uuid, icon => ({
        colorIndex: action.index
      }));

    default:
      return state || {};
  }
};
