export const getIcons = (state) => state.icons;
export const getIcon = (state, uuid) => getIcons(state)[uuid];

export const getIconHistoryState = (state, uuid) => {
  const history = state.history[uuid];

  if (!history) {
    return null;
  }

  return history.list[history.index];
};