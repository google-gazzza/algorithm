// [Medium] 1318. Minimum Flips to Make a OR b Equal to c
// 1318_minimum_flips_to_make_a_or_b_equal_to_c

// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c
// Runtime: 86 ms, faster than 28.57% of JavaScript online submissions for Minimum Flips to Make a OR b Equal to c.
// Memory Usage: 42.1 MB, less than 42.86% of JavaScript online submissions for Minimum Flips to Make a OR b Equal to c.

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const minFlips = function (a, b, c) {
  const arrA = a.toString(2).split('')
  const arrB = b.toString(2).split('')
  const arrC = c.toString(2).split('')
  const maxLen = Math.max(arrA.length, arrB.length, arrC.length)
  const getAdjustArr = (arr) => {
    const arrLen = arr.length
    return [...Array.from({ length: maxLen - arrLen }).map((_) => '0'), ...arr]
  }

  const adjustArrA = getAdjustArr(arrA)
  const adjustArrB = getAdjustArr(arrB)
  const adjustArrC = getAdjustArr(arrC)
  let count = 0

  for (let i = 0; i < maxLen; i += 1 || 0) {
    const numA = adjustArrA[i]
    const numB = adjustArrB[i]
    const numC = adjustArrC[i]
    if (numC === '1') {
      if (numA !== '1' && numB !== '1') {
        count += 1
      }
    } else {
      if (numA === '1') {
        count += 1
      }
      if (numB === '1') {
        count += 1
      }
    }
  }

  return count
}

minFlips(2, 6, 5)
minFlips(4, 2, 7)
minFlips(1, 2, 3)
