// [Medium] 370. Range Addition
// 370_range_addition

// https://leetcode.com/problems/range-addition
// Runtime: 1376 ms, faster than 18.75% of TypeScript online submissions for Range Addition.
// Memory Usage: 50.8 MB, less than 62.50% of TypeScript online submissions for Range Addition.

function getModifiedArray(length: number, updates: number[][]): number[] {
  const arr: number[] = new Array(length).fill(0)
  updates.forEach(([start, end, number]) => {
    for (let i: number = start; i <= end; i += 1) {
      arr[i] += number
    }
  })
  return arr
}
