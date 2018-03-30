export const ICONS_CREATE = 'ICONS_CREATE';
export const ICONS_RENAME = 'ICONS_RENAME';

export const createIcon = () => ({
    type: ICONS_CREATE
});

export const renameIcon = (uuid, name) => ({
    uuid,
    name,
    type: ICONS_RENAME,
});
