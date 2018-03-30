import uuidv1 from 'uuid/v1';

export const ICONS_CREATE = 'ICONS_CREATE';
export const ICONS_RENAME = 'ICONS_RENAME';

export const createIcon = () => ({
    uuid: uuidv1(),
    type: ICONS_CREATE
});

export const renameIcon = (uuid, name) => ({
    uuid,
    name,
    type: ICONS_RENAME,
});
