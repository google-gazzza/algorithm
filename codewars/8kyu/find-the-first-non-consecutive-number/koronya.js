// [JS][8kyu] Find the first non-consecutive number
// find-the-first-non-consecutive-number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

const firstNonConsecutive = (arr) => {
  const arrLen = arr.length
  let prev = arr[0]
  for (let i = 1; i < arrLen; i += 1) {
    const now = arr[i]
    if (now - prev !== 1) {
      return arr[i]
    }
    prev = now
  }
  return null
}

firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]) === 6
firstNonConsecutive([1, 2, 3, 4]) === null


