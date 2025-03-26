// [JS][8kyu] Return the day
// return-the-day
// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript

const whatday = (num) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return num > 0 && num < 8 ? days[num - 1] : 'Wrong, please enter a number between 1 and 7'
}

whatday(1) === 'Sunday'
whatday(2) === 'Monday'
whatday(3) === 'Tuesday'
whatday(8) === 'Wrong, please enter a number between 1 and 7'
whatday(20) === 'Wrong, please enter a number between 1 and 7'
