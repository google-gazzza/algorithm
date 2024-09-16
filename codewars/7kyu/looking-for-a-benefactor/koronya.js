// [JS][7kyu] Looking for a benefactor
// looking-for-a-benefactor
// https://www.codewars.com/kata/569b5cec755dd3534d00000f/train/javascript

const newAvg = (arr, newavg) => {
  const arrLen = arr.length
  const sum = arr.reduce((acc, cur) => acc + cur, 0)
  const result = newavg * (arrLen + 1) - sum
  if (result < 0) {
    throw Error('Expected New Average is too low')
  }
  return Math.ceil(result)
}

newAvg([14, 30, 5, 7, 9, 11, 15], 92.92)
// newAvg([14, 30, 5, 7, 9, 11, 16], 90)
// newAvg([14, 30, 5, 7, 9, 11, 15], 92)
// newAvg([14, 30, 5, 7, 9, 11, 15], -10)
