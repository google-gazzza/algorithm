// [Easy] 2094. Finding 3-Digit Even Numbers
// 2094_finding_3-digit_even_numbers

// https://leetcode.com/problems/finding-3-digit-even-numbers
// Runtime: 2820 ms, faster than 27.77% of JavaScript online submissions for Finding 3-Digit Even Numbers.
// Memory Usage: 52.6 MB, less than 21.67% of JavaScript online submissions for Finding 3-Digit Even Numbers.

const getValidEvenArr = (arr) => {
  const [first, second, third] = arr.map((item) => String(item))
  const result = [
    first + second + third,
    first + third + second,
    second + third + first,
    second + first + third,
    third + first + second,
    third + second + first,
  ]

  return result.filter((item) => item[0] !== '0' && Number(item[2]) % 2 !== 1).map((item) => Number(item))
}

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const findEvenNumbers = function (digits) {
  const resultSet = new Set()
  const digitsLen = digits.length
  const dfs = (arr, start) => {
    const arrLen = arr.length
    if (arrLen === 3) {
      getValidEvenArr(arr).forEach((item) => resultSet.add(item))
    } else if (arrLen < 3) {
      for (let i = start + 1; i < digitsLen; i += 1 || 0) {
        dfs([...arr, digits[i]], i)
      }
    }
  }
  for (let i = 0; i < digitsLen; i += 1 || 0) {
    dfs([digits[i]], i)
  }

  return [...resultSet].sort((a, b) => a - b)
}

findEvenNumbers([2, 1, 3, 0])
// findEvenNumbers([2, 2, 8, 8, 2])
// findEvenNumbers([3, 7, 5])
// findEvenNumbers([0, 2, 0, 0])
// findEvenNumbers([0, 0, 0])
