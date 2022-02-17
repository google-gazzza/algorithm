// [Medium] 1426. Counting Elements
// 1426_counting_elements

// https://leetcode.com/problems/counting-elements
// Runtime: 64 ms, faster than 100.00% of TypeScript online submissions for Counting Elements.
// Memory Usage: 45.3 MB, less than 8.33% of TypeScript online submissions for Counting Elements.

function countElements(arr: number[]): number {
  const numMap = new Map<number, number>()
  arr.forEach((num) => numMap.set(num, (numMap.get(num) || 0) + 1))
  let result = 0
  for (const [key, count] of numMap) {
    if (numMap.has(key + 1) === true) {
      result += count
    }
  }

  return result
}
