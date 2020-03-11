import cloneDeep from 'clone-deep';

export function handleChaigeFigure(text, state, updateState) {
  const {status, currentX, currentY} = state;
  let statusClone = cloneDeep(status);
  statusClone[currentY][currentX] = text;
  updateState({
      status: statusClone,
      isChaigeFigure: false,
      currentY: null,
      currentX: null,
  })
}