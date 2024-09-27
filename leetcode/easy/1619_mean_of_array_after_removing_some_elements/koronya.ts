// [Easy] 1619. Mean of Array After Removing Some Elements
// 1619_mean_of_array_after_removing_some_elements

// https://leetcode.com/problems/mean-of-array-after-removing-some-elements
// Runtime: 88 ms, faster than 87.50% of TypeScript online submissions for Mean of Array After Removing Some Elements.
// Memory Usage: 40.5 MB, less than 62.50% of TypeScript online submissions for Mean of Array After Removing Some Elements.
function trimMean (arr: number[]): number {
  const removeCount: number = arr.length / 20
  arr.sort((a: number, b: number): number => a - b)
  for (let i: number = 0; i < removeCount; i += 1) {
    arr.shift()
    arr.pop()
  }

  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}
