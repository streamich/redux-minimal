import uuidv1 from 'uuid/v1';
import {ICONS_CREATE} from "../actions/icons";

let cnt = 1;

export default (state, action) => {
  switch (action.type) {
    case ICONS_CREATE:
      const uuid = uuidv1();

      return {...state, [uuid]: {
        uuid,
        name: action.name || ('Unnamed ' + (cnt++)),
        tags: {},
        pixels: {},
        colors: [],
      }};
    default:
      return state || {};
  }
};
