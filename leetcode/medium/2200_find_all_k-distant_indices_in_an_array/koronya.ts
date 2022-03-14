// [Easy] 2200. Find All K-Distant Indices in an Array
// 2200_find_all_k-distant_indices_in_an_array

// https://leetcode.com/problems/find-all-k-distant-indices-in-an-array
// Runtime: 213 ms, faster than 100.00% of TypeScript online submissions for Find All K-Distant Indices in an Array.
// Memory Usage: 44.7 MB, less than 100.00% of TypeScript online submissions for Find All K-Distant Indices in an Array.

function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const keyIndex: number[] = []
  const resultSet = new Set<number>()
  nums.forEach((num, index) => {
    if (num === key) {
      keyIndex.push(index)
    }
  })
  keyIndex.forEach((num) => {
    const max = Math.min(nums.length - 1, num + k)
    const min = Math.max(0, num - k)
    for (let i: number = num; i <= max; i += 1) {
      resultSet.add(i)
    }
    for (let i: number = num - 1; i >= min; i -= 1) {
      resultSet.add(i)
    }
  })

  return [...resultSet].sort((a, b) => a - b)
}
