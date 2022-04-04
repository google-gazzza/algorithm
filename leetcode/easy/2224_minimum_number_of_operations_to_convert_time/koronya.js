// [Easy] 2224. Minimum Number of Operations to Convert Time
// 2224_minimum_number_of_operations_to_convert_time

// https://leetcode.com/problems/minimum-number-of-operations-to-convert-time
// Runtime: 85 ms, faster than 100.00% of JavaScript online submissions for Minimum Number of Operations to Convert Time.
// Memory Usage: 42 MB, less than 100.00% of JavaScript online submissions for Minimum Number of Operations to Convert Time.

const getAbsoluteTime = (str) => {
  const [hh, mm] = str.split(':').map((item) => Number(item))
  return hh * 60 + mm
}

/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
const convertTime = function (current, correct) {
  const countArr = [60, 15, 5, 1]
  const countArrLen = countArr.length
  let diff = getAbsoluteTime(correct) - getAbsoluteTime(current)
  let count = 0
  let countArrIndex = 0
  while (countArrIndex < countArrLen) {
    let divideTarget = countArr[countArrIndex]
    while (diff >= divideTarget) {
      const residue = diff % divideTarget
      const quotient = Math.floor(diff / divideTarget)
      diff = residue
      count += quotient
    }
    countArrIndex += 1
  }

  return count
}

convertTime('02:30', '04:35')
convertTime('11:00', '11:01')
