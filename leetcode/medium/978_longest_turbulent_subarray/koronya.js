// [Medium] 978. Longest Turbulent Subarray
// 978_longest_turbulent_subarray

// https://leetcode.com/problems/longest-turbulent-subarray
// Runtime: 2024 ms, faster than 6.00% of JavaScript online submissions for Longest Turbulent Subarray.
// Memory Usage: 52.4 MB, less than 6.00% of JavaScript online submissions for Longest Turbulent Subarray.

/**
 * @param {number[]} arr
 * @return {number}
 */
const maxTurbulenceSize = function (arr) {
  const arrLen = arr.length
  if (arrLen <= 1) {
    return arrLen
  }
  let maxCount = 1
  for (let left = 0; left < arrLen; left += 1 || 0) {
    let beforeNum = arr[left]
    let init = true
    let beforeChangePlus
    let right = left + 1
    const tempArr = [beforeNum]
    while (right < arrLen) {
      const num = arr[right]
      const diff = num - beforeNum
      if (diff === 0) {
        break
      }
      const newChangePlus = diff > 0
      beforeNum = num
      if (init === true) {
        init = false
      } else {
        if (beforeChangePlus === newChangePlus) {
          break
        }
      }
      beforeChangePlus = newChangePlus
      tempArr.push(num)
      right += 1
      maxCount = Math.max(maxCount, tempArr.length)
    }
  }

  return maxCount
}

maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]) //?
maxTurbulenceSize([4, 8, 12, 16]) //?
maxTurbulenceSize([100]) //?
maxTurbulenceSize([9, 9]) //?
