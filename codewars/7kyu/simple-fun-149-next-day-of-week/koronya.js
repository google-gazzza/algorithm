// [JS][7kyu] Simple Fun #149: Next Day Of Week
// simple-fun-149-next-day-of-week
// https://www.codewars.com/kata/58aa9662c55ffbdceb000101/train/javascript

const WEEKDAYS_LENGTH = 7

const nextDayOfWeek = (currentDay, availableWeekDays) => {
  console.log(`currentDay: ${currentDay}, availableWeekDays: ${availableWeekDays}`)
  const arr = availableWeekDays
    .toString(2)
    .padStart(7, '0')
    .split('')
    .map((item, index) => (item === '1' ? WEEKDAYS_LENGTH - index : -1))
    .filter((item) => item !== -1)
    .reverse()

  return arr.find((item) => item > currentDay) || arr[0]
}

nextDayOfWeek(4, 42) === 6
nextDayOfWeek(6, 42) === 2
nextDayOfWeek(7, 42) === 2
nextDayOfWeek(2, 77)
