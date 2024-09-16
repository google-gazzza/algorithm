// [Medium] 1072. Flip Columns For Maximum Number of Equal Rows
// 1072_flip_columns_for_maximum_number_of_equal_rows

// https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows
// Runtime: 188 ms, faster than 14.29% of JavaScript online submissions for Flip Columns For Maximum Number of Equal Rows.
// Memory Usage: 48.3 MB, less than 64.29% of JavaScript online submissions for Flip Columns For Maximum Number of Equal Rows.

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const maxEqualRowsAfterFlips = function (matrix) {
  const flipArr = matrix.map((row) => {
    let oneCount = 0
    let zeroCount = 0
    row.forEach((item) => {
      if (item === 0) {
        zeroCount += 1
      } else {
        oneCount += 1
      }
    })
    return zeroCount === oneCount
      ? row.reduce((acc, cur) => (cur === 1 ? acc + 'T' : acc + 'F'), '_')
      : zeroCount < oneCount
      ? row.reduce((acc, cur) => (cur === 1 ? acc + 'T' : acc + 'F'), '')
      : row.reduce((acc, cur) => (cur === 0 ? acc + 'T' : acc + 'F'), '')
  })

  const flipMap = new Map()
  const getFlipItem = (item) => {
    const flip = item.substr(1)
    if (flipMap.has(flip)) {
      return flip
    }
    return flip
      .split('')
      .map((item) => (item === 'T' ? 'F' : 'T'))
      .reduce((acc, cur) => acc + cur, '')
  }

  flipArr.forEach((item) => {
    if (item.startsWith('_')) {
      const name = getFlipItem(item)
      flipMap.set(name, (flipMap.get(name) || 0) + 1)
    } else {
      flipMap.set(item, (flipMap.get(item) || 0) + 1)
    }
  })

  let max = 0
  flipMap.forEach((item) => {
    max = Math.max(max, item)
  })

  return max
}

maxEqualRowsAfterFlips([
  [0, 1],
  [1, 1],
]) //?
maxEqualRowsAfterFlips([
  [0, 1],
  [1, 0],
]) //?
maxEqualRowsAfterFlips([
  [0, 0, 0],
  [0, 0, 1], // 0, 1 || 2
  [1, 1, 0], // 0, 1 || 2
]) //?

// maxEqualRowsAfterFlips([
//   [0, 0, 0],
//   [0, 0, 1], // TTF, FFT
//   [1, 1, 0], // TTF, FFT
// ]) //?

maxEqualRowsAfterFlips([
  [0, 0, 0, 0], // null || 0, 1, 2, 3
  [0, 0, 1, 1], // 0, 1 || 2, 3
  [0, 1, 1, 0], // 0, 3 || 1, 2
  [1, 1, 0, 1], // 0, 1, 3 || 2
  [0, 0, 1, 0], // 0, 1, 3 || 2
  [1, 1, 0, 0], // 0, 1 || 2, 3
  [1, 1, 0, 0], // 0, 1 || 2, 3
]) //?

// maxEqualRowsAfterFlips([
//   [0, 0, 0, 0], // TTTT, FFFF
//   [0, 0, 1, 1], // TTFF, FFTT
//   [1, 1, 0, 1], // TTFT, FFTF
//   [0, 0, 1, 0], // TTFT, FFTF
//   [1, 1, 0, 0], // TTFF, FFTT
//   [1, 1, 0, 0], // TTFF, FFTT
// ]) //?
