// [Easy] 2032. Two Out of Three
// 2032_two_out_of_three

// https://leetcode.com/problems/two-out-of-three
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Two Out of Three.
// Memory Usage: 43 MB, less than 69.77% of TypeScript online submissions for Two Out of Three.

function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const resultSet = new Set<number>()
  const numSet = new Set<number>()
  const candidates = [[...new Set(nums1)], [...new Set(nums2)], [...new Set(nums3)]]
  candidates.forEach((candidate) =>
    candidate.forEach((num) => {
      if (numSet.has(num) === true && resultSet.has(num) === false) {
        resultSet.add(num)
      } else {
        numSet.add(num)
      }
    }),
  )
  return [...resultSet]
}

twoOutOfThree([1, 1, 3, 2], [2, 3], [3]) //?
twoOutOfThree([3, 1], [2, 3], [1, 2]) //?
twoOutOfThree([1, 2, 2], [4, 3, 3], [5]) //?
