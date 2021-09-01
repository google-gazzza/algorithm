// [Medium] 1054. Distant Barcodes
// 1054_distant_barcodes

// https://leetcode.com/problems/distant-barcodes
// Runtime: 5472 ms, faster than 6.67% of JavaScript online submissions for Distant Barcodes.
// Memory Usage: 56.3 MB, less than 6.67% of JavaScript online submissions for Distant Barcodes.

const descSort = (a, b) => b[1] - a[1]

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
const rearrangeBarcodes = function (barcodes) {
  const resultArr = []
  const codeMap = new Map()
  const barcodesLen = barcodes.length
  for (let i = 0; i < barcodesLen; i += 1 || 0) {
    const code = barcodes[i]
    codeMap.set(code, (codeMap.get(code) || 0) + 1)
  }

  let arr = [...codeMap].sort(descSort)
  while (arr.length > 1) {
    const [first, second] = arr
    first[1] -= 1
    second[1] -= 1
    resultArr.push(first[0])
    resultArr.push(second[0])
    arr = arr.filter((item) => item[1] > 0)
    arr.sort(descSort)
  }
  if (arr.length === 1) {
    resultArr.push(arr[0][0])
  }

  return resultArr
}

rearrangeBarcodes([1, 1, 1, 2, 2, 2]) //?
rearrangeBarcodes([1, 1, 1, 1, 2, 2, 3, 3]) //?

rearrangeBarcodes([1, 1, 1, 1, 1, 2, 2, 2, 2]) //?
rearrangeBarcodes([1, 1, 1, 2, 2, 2, 3]) //?
rearrangeBarcodes([7, 7, 7, 8, 5, 7, 5, 5, 5, 8]) //?
