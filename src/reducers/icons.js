import {APP_LOAD_INITIAL_STATE} from '../actions/app';
import {
  ICONS_CREATE,
  ICONS_DELETE,
  ICONS_RENAME,
  ICONS_TAG_ADD,
  ICONS_TAG_REMOVE,
  ICONS_SET_COLOR,
  ICONS_SELECT_COLOR,
  ICONS_PUT_COLOR,
  ICONS_PUT,
} from '../actions/icons';

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
    case APP_LOAD_INITIAL_STATE:
      return action.state.icons;
    case ICONS_CREATE:
      return {...state, [action.uuid]: {
        uuid: action.uuid,
        name: action.name || ('Unnamed ' + (cnt++)),
        tags: {},
        pixels: {},
        colorIndex: -1,
        colors: [],
      }};
    case ICONS_DELETE:
      const {[action.uuid]: omitIcon, ...rest} = state;
      return rest;
    case ICONS_RENAME:
      return patchIcon(state, action.uuid, (icon) => ({
        name: action.name,
      }));
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
      return patchIcon(state, action.uuid, (icon) => {
        const {[action.tag]: omit, ...tags} = icon.tags;

        return {tags};
      });
    case ICONS_SET_COLOR:
      return patchIcon(state, action.uuid, (icon) => {
        const colors = [...icon.colors];

        colors[action.index] = action.color;

        return {colors};
      });
    case ICONS_SELECT_COLOR:
      return patchIcon(state, action.uuid, icon => ({
        colorIndex: action.index
      }));
    case ICONS_PUT_COLOR:
      return patchIcon(state, action.uuid, (icon) => ({
        pixels: {
          ...icon.pixels,
          [action.y]: {
            ...(icon.pixels[action.y] || {}),
            [action.x]: action.color
          }
        }
      }));
    case ICONS_PUT:
      return {...state, [action.icon.uuid]: action.icon};
    default:
      return state || {};
  }
};
