// [Easy] 414. Third Maximum Number
// 414_third_maximum_number

// https://leetcode.com/problems/third-maximum-number
// Runtime: 88 ms, faster than 54.65% of TypeScript online submissions for Third Maximum Number.
// Memory Usage: 41.5 MB, less than 23.26% of TypeScript online submissions for Third Maximum Number.

function thirdMax(nums: number[]): number {
  const numSet = new Set<number>()
  nums.forEach((num) => numSet.add(num))
  const sortedArr: number[] = [...numSet].sort((a, b) => b - a)
  if (numSet.size < 3) {
    return sortedArr[0]
  }

  return numSet.size < 3 ? sortedArr[0] : sortedArr[2]
}

thirdMax([3, 2, 1]) //?
thirdMax([2, 1]) //?
thirdMax([2, 2, 3, 1]) //?
