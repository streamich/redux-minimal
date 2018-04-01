export const getIcons = (state) => state.icons;
export const getIcon = (state, uuid) => getIcons(state)[uuid];

export const getIconHistory = (state, uuid) => state.history[uuid];
export const getIconHistoryState = (state, uuid) => {
  const history = getIconHistory(state, uuid);

  if (!history) {
    return null;
  }

  return history.list[history.index];
};