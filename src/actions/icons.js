import uuidv1 from 'uuid/v1';

export const ICONS_CREATE = 'ICONS_CREATE';
export const ICONS_RENAME = 'ICONS_RENAME';
export const ICONS_TAG_ADD = 'ICONS_TAG_ADD';
export const ICONS_TAG_REMOVE = 'ICONS_TAG_REMOVE';

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
