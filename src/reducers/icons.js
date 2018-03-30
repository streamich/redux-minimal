import uuidv1 from 'uuid/v1';
import {ICONS_CREATE} from "../actions/icons";

export default (state, action) => {
  switch (action.type) {
    case ICONS_CREATE:
      const uuid = uuidv1();

      return {...state, [uuid]: {
        uuid,
        name: action.name || 'Unnamed',
        tags: {},
        pixels: {},
        colors: [],
      }};
    default:
      return state || {};
  }
};
