// [Easy] 2206. Divide Array Into Equal Pairs
// 2206_divide_array_into_equal_pairs

// https://leetcode.com/problems/divide-array-into-equal-pairs
// Runtime: 89 ms, faster than 81.82% of TypeScript online submissions for Divide Array Into Equal Pairs.
// Memory Usage: 46.7 MB, less than 9.09% of TypeScript online submissions for Divide Array Into Equal Pairs.

function divideArray(nums: number[]): boolean {
  const numMap = new Map<number, number>()
  nums.forEach((num) => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })

  return [...numMap].every((item) => item[1] % 2 === 0)
}
