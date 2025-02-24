// [Easy] 1133. Largest Unique Number
// 1133_largest_unique_number

// https://leetcode.com/problems/largest-unique-number
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Largest Unique Number.
// Memory Usage: 40.7 MB, less than 50.00% of TypeScript online submissions for Largest Unique Number.

function largestUniqueNumber(nums: number[]): number {
  const numMap = new Map<number, number>()
  nums.forEach((num) => numMap.set(num, (numMap.get(num) || 0) + 1))
  const uniqueArr = [...numMap].filter((item) => item[1] === 1).map((item) => item[0])
  return uniqueArr.length > 0 ? Math.max(...uniqueArr) : -1
}

largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]) //?
largestUniqueNumber([9, 9, 8, 8]) //?
