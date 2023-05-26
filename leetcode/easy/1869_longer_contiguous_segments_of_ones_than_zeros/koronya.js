// [Easy] 1869. Longer Contiguous Segments of Ones than Zeros
// 1869_longer_contiguous_segments_of_ones_than_zeros

// https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros
// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions for Longer Contiguous Segments of Ones than Zeros.
// Memory Usage: 38.7 MB, less than 100.00% of JavaScript online submissions for Longer Contiguous Segments of Ones than Zeros.

/**
 * @param {string} s
 * @return {boolean}
 */
const checkZeroOnes = function (s) {
  let maxOne = 0
  let maxZero = 0
  let beforeStr = ''
  let beforeCount = 0
  const sLen = s.length
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (beforeStr === str) {
      beforeCount += 1
    } else {
      beforeStr = str
      beforeCount = 1
    }

    if (str === '1') {
      maxOne = Math.max(maxOne, beforeCount)
    } else {
      maxZero = Math.max(maxZero, beforeCount)
    }
  }

  return maxOne > maxZero
}

checkZeroOnes('1101') //?
checkZeroOnes('111000') //?
checkZeroOnes('110100010') //?
