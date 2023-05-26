// [Medium] 1630. Arithmetic Subarrays
// 1630_arithmetic_subarrays

// https://leetcode.com/problems/arithmetic-subarrays
// Runtime: 152 ms, faster than 90.00% of TypeScript online submissions for Arithmetic Subarrays.
// Memory Usage: 45.6 MB, less than 60.00% of TypeScript online submissions for Arithmetic Subarrays.
function checkArithmeticSubarrays (nums: number[], l: number[], r: number[]): boolean[] {
  const resultArr: boolean[] = []
  const m: number = l.length
  for (let i: number = 0; i < m; i += 1 || 0) {
    const start: number = l[i]
    const end: number = r[i] + 1
    const size: number = end - start
    const arr: number[] = nums.slice(start, end)
    arr.sort((a: number, b: number): number => a - b)
    let diff: number = arr[1] - arr[0]
    let flag: boolean = true
    for (let i: number = 1; i < size - 1; i += 1 || 0) {
      if (diff !== arr[i + 1] - arr[i]) {
        flag = false
        break
      }
    }
    resultArr.push(flag)
  }

  return resultArr
}
