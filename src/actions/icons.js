import uuidv1 from 'uuid/v1';

export const ICONS_CREATE = 'ICONS_CREATE';
export const ICONS_RENAME = 'ICONS_RENAME';
export const ICONS_TAG_ADD = 'ICONS_TAG_ADD';
export const ICONS_TAG_REMOVE = 'ICONS_TAG_REMOVE';
export const ICONS_SET_COLOR = 'ICONS_SET_COLOR';
export const ICONS_SELECT_COLOR = 'ICONS_SELECT_COLOR';

export const createIcon = () => ({
  uuid: uuidv1(),
  type: ICONS_CREATE
});

export const renameIcon = (uuid, name) => ({
  uuid,
  name,
  type: ICONS_RENAME,
});

export const addTag = (uuid, tag) => ({
  uuid,
  tag,
  type: ICONS_TAG_ADD,
});

export const removeTag = (uuid, tag) => ({
  uuid,
  tag,
  type: ICONS_TAG_REMOVE,
});

export const setColor = (uuid, index, color) => ({
  uuid,
  index,
  color,
  type: ICONS_SET_COLOR,
});

export const selectColor = (uuid, index) => ({
  uuid,
  index,
  type: ICONS_SELECT_COLOR,
});
