export const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const dayShortNames = ['Sun', 'Mon', 'Tu', 'Wed', 'Th', 'Fri', 'Sat'];

export const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function getWeekOfMonth(date) {
  const adjustedDate = date.getDate() + date.getDay();
  const prefixes = ['0', '1', '2', '3', '4', '5'];
  return (parseInt(prefixes[0 | adjustedDate / 7])+1);
}

export function getDoubleDigitNumberString(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

export function getMonthNumberedString(date) {
  const month = date.getMonth() + 1;
  return getDoubleDigitNumberString(month);
}
