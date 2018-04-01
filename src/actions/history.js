export const HISTORY_PUSH = 'HHISTORY_PUSH';
export const HISTORY_PREV = 'HISTORY_PREV';
export const HISTORY_NEXT = 'HISTORY_NEXT';

export const historyPush = (icon) => ({
  icon,
  type: HISTORY_PUSH
});

export const historyPrev = (uuid) => ({
  uuid,
  type: HISTORY_PREV,
});

export const historyNext = (uuid) => ({
  uuid,
  type: HISTORY_NEXT,
});
