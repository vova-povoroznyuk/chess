export function handleChaigeFigure(text, state, updateState) {
  const {status, currentX, currentY} = state;
  let newStatus = status.map(el => el.slice());
  newStatus[currentY][currentX] = text;
  updateState({
      ...state,
      status: newStatus,
      isChaigeFigure: false,
      currentY: null,
      currentX: null,
  })
}