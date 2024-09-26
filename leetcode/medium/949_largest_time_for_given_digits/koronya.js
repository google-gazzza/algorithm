// [Medium] 949. Largest Time for Given Digits
// 949_largest_time_for_given_digits

// https://leetcode.com/problems/largest-time-for-given-digits
// Runtime: 79 ms, faster than 64.52% of JavaScript online submissions for Largest Time for Given Digits.
// Memory Usage: 40.5 MB, less than 58.06% of JavaScript online submissions for Largest Time for Given Digits.

const convertToTimeString = (str) => {
  const splitedArr = String(str).split('')
  return `${splitedArr[0]}${splitedArr[1]}:${splitedArr[2]}${splitedArr[3]}`
}

/**
 * @param {number[]} arr
 * @return {string}
 */

const largestTimeFromDigits = function (arr) {
  const resultArr = []
  const backtracking = (candidateArr, restArr) => {
    const candidateArrLen = candidateArr.length
    if (candidateArrLen === 4) {
      resultArr.push(candidateArr.reduce((acc, cur) => acc + cur, ''))
    } else {
      if (candidateArr[0] > 2) {
        return
      }
      if (candidateArr[0] === 2 && candidateArr[1] > 3) {
        return
      }
      if (candidateArr[2] > 5) {
        return
      }
      const restArrLen = restArr.length
      for (let i = 0; i < restArrLen; i += 1 || 0) {
        const copiedArr = [...restArr]
        const item = copiedArr.splice(i, 1)
        backtracking([...candidateArr, ...item], copiedArr)
      }
    }
  }
  for (let i = 0; i < 4; i += 1 || 0) {
    const copiedArr = [...arr]
    const item = copiedArr.splice(i, 1)
    backtracking([...item], copiedArr)
  }
  const uniqueArr = [...new Set(resultArr)]
  if (uniqueArr.length === 0) {
    return ''
  }
  uniqueArr.sort((a, b) => Number(b) - Number(a))

  return convertToTimeString(uniqueArr[0])
}

largestTimeFromDigits([1, 2, 3, 4]) //?
largestTimeFromDigits([5, 5, 5, 5]) //?
largestTimeFromDigits([0, 0, 0, 0]) //?
largestTimeFromDigits([0, 0, 1, 0]) //?
largestTimeFromDigits([1, 6, 3, 4]) //?
