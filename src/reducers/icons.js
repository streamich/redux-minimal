import { ICONS_CREATE } from "../actions/icons";

export default (state, action) => {
  switch (action.type) {
    case ICONS_CREATE:
      const uuid = '123';

      return {...state, [uuid]: {
        uuid,
        name: action.name || '',
        tags: {},
        pixels: {}
      }};
    default:
      return state;
  }
};
