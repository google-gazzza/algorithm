// [JS][7kyu] All Star Code Challenge #22
// all-star-code-challenge-22
// https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript

const toTime = (seconds) => {
  const hour = Math.floor(seconds / 3600)
  const minute = Math.floor((seconds % 3600) / 60)
  return `${hour} hour(s) and ${minute} minute(s)`
}

toTime(3600) === '1 hour(s) and 0 minute(s)'
toTime(3601) === '1 hour(s) and 0 minute(s)'
toTime(3500) === '0 hour(s) and 58 minute(s)'
toTime(323500) === '89 hour(s) and 51 minute(s)'
toTime(0) === '0 hour(s) and 0 minute(s)'
