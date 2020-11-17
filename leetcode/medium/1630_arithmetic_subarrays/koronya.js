// [Medium] 1630. Arithmetic Subarrays
// 1630_arithmetic_subarrays

// https://leetcode.com/problems/arithmetic-subarrays
// Runtime: 140 ms, faster than 94.58% of JavaScript online submissions for Arithmetic Subarrays.
// Memory Usage: 45.4 MB, less than 27.59% of JavaScript online submissions for Arithmetic Subarrays.
const checkArithmeticSubarrays = function (nums, l, r) {
  const resultArr = []
  const m = l.length
  for (let i = 0; i < m; i += 1 || 0) {
    const start = l[i]
    const end = r[i] + 1
    const size = end - start
    const arr = nums.slice(start, end)
    arr.sort((a, b) => a - b)
    let diff = arr[1] - arr[0]
    let flag = true
    for (let i = 1; i < size - 1; i += 1 || 0) {
      if (diff !== arr[i + 1] - arr[i]) {
        flag = false
        break
      }
    }
    resultArr.push(flag)
  }

  return resultArr
}
