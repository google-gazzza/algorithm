// [JS][7kyu] Oh dear God! Is it bugged?
// oh-dear-god-is-it-bugged
// https://www.codewars.com/kata/580e67ae22e42d797000015e/train/javascript

const isNumberString = (str) => /^\d+$/.test(str)

const isItBugged = (code) => {
  const arr = code.split(' ')
  if (arr.length !== 2) {
    return false
  }
  const yearMonthDay = arr[0].split('-')
  if (yearMonthDay.length !== 3) {
    return false
  }
  const time = arr[1].split(':')
  if (time.length !== 2) {
    return false
  }

  if ([...yearMonthDay, ...time].some((str) => !isNumberString(str))) {
    return false
  }
  if (code.length !== 16) {
    return false
  }

  const [dayStr, monthStr, yearStr, hourStr, minuteStr] = [...yearMonthDay, ...time]
  if (dayStr.length !== 2 || monthStr.length !== 2 || yearStr.length !== 4 || hourStr.length !== 2 || minuteStr.length !== 2) {
    return false
  }

  return true
}

// isItBugged('01_09_2016 01:20') === false
// isItBugged('14-10-1066 12:00') === true
// isItBugged('Tenth of January') === false
// isItBugged('11-00-4865 0:20') === false
// isItBugged('27-05-1718 19:9') === false
// isItBugged('27-00-2618 24:56') === true
// isItBugged('11-00-6528 11:46') === true
