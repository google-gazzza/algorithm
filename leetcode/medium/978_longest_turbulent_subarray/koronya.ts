// [Medium] 978. Longest Turbulent Subarray
// 978_longest_turbulent_subarray

// https://leetcode.com/problems/longest-turbulent-subarray
// Runtime: 4733 ms, faster than 100.00% of TypeScript online submissions for Longest Turbulent Subarray.
// Memory Usage: 83.7 MB, less than 100.00% of TypeScript online submissions for Longest Turbulent Subarray.

function maxTurbulenceSize(arr: number[]): number {
  const arrLen: number = arr.length
  if (arrLen <= 1) {
    return arrLen
  }
  let maxCount: number = 1
  for (let left: number = 0; left < arrLen; left += 1) {
    let beforeNum: number = arr[left]
    let init: boolean = true
    let beforeChangePlus: boolean | undefined
    let right: number = left + 1
    const tempArr: number[] = [beforeNum]
    while (right < arrLen) {
      const num: number = arr[right]
      const diff: number = num - beforeNum
      if (diff === 0) {
        break
      }
      const newChangePlus: boolean = diff > 0
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
