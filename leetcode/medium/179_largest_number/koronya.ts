// [Medium] 179. Largest Number
// 179_largest_number

// https://leetcode.com/problems/largest-number
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Largest Number.
// Memory Usage: 40.7 MB, less than 22.73% of TypeScript online submissions for Largest Number.
const sortFnc = (a: number, b: number): number => {
  const strA: string = String(a)
  const strB: string = String(b)
  if (Number(strA + strB) < Number(strB + strA)) {
    return 1
  } else {
    return -1
  }
}

function largestNumber (nums: number[]): string {
  if (nums.every((num: number): boolean => num === 0)) {
    return '0'
  }
  nums.sort(sortFnc)
  return nums.join('')
}
