export const getIcons = (state) => state.icons;
export const getIcon = (state, uuid) => getIcons(state)[uuid];
