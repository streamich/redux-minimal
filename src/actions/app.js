export const APP_LOAD_INITIAL_STATE = 'APP_LOAD_INITIAL_STATE';
export const APP_SELECT_ICON = 'APP_SELECT_ICON';
export const APP_IMPORT_ICON = 'APP_IMPORT_ICON';

export const loadState = (state) => ({
  state,
  type: APP_LOAD_INITIAL_STATE,
});

export const selectIcon = (uuid) => ({
  uuid,
  type: APP_SELECT_ICON,
});

export const importIcon = (icon) => ({
  icon,
  type: APP_IMPORT_ICON,
});
