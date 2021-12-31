// [Medium] 1471. The k Strongest Values in an Array
// 1471_the_k_strongest_values_in_an_array

// https://leetcode.com/problems/the-k-strongest-values-in-an-array
// Runtime: 356 ms, faster than 100.00% of TypeScript online submissions for The k Strongest Values in an Array.
// Memory Usage: 71.2 MB, less than 100.00% of TypeScript online submissions for The k Strongest Values in an Array.

function getStrongest(arr: number[], k: number): number[] {
  arr.sort((a, b) => a - b)
  const median: number = arr[Math.floor((arr.length - 1) / 2)]
  const adjustArr = arr.map((num) => ({
    diff: Math.abs(num - median),
    num,
  }))
  adjustArr.sort((a, b) => (b.diff - a.diff ? b.diff - a.diff : b.num - a.num))

  return adjustArr.slice(0, k).map((item) => item.num)
}
