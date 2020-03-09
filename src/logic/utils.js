export const getColor = (string) => {
  const arr = string.split(' ');
  return arr[0];
}
export const getType = (string) => {
  const arr = string.split(' ');
  const type = arr[1] || "empty";
  return type;
}