// [Easy] 1869. Longer Contiguous Segments of Ones than Zeros
// 1869_longer_contiguous_segments_of_ones_than_zeros

// https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Longer Contiguous Segments of Ones than Zeros.
// Memory Usage: 39.3 MB, less than 100.00% of TypeScript online submissions for Longer Contiguous Segments of Ones than Zeros.

/**
 * @param {string} s
 * @return {boolean}
 */
function checkZeroOnes(s: string): boolean {
  let maxOne: number = 0
  let maxZero: number = 0
  let beforeStr: string = ''
  let beforeCount: number = 0
  const sLen: number = s.length
  for (let i: number = 0; i < sLen; i += 1) {
    const str: string = s[i]
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
