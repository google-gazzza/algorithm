// [Medium] 1891. Cutting Ribbons
// 1891_cutting_ribbons

// https://leetcode.com/problems/cutting-ribbons
// Runtime: 116 ms, faster than 100.00% of TypeScript online submissions for Cutting Ribbons.
// Memory Usage: 51.5 MB, less than 100.00% of TypeScript online submissions for Cutting Ribbons.

function maxLength(ribbons: number[], k: number): number {
  const ribbonsLen = ribbons.length
  let left: number = 0
  let right: number = Math.floor(ribbons.reduce((acc, cur) => acc + cur, 0) / k)
  while (left < right) {
    let middle: number = Math.floor((left + right + 1) / 2)
    let count: number = 0
    for (let i: number = 0; i < ribbonsLen && count < k; i += 1) {
      count += Math.floor(ribbons[i] / middle)
    }
    if (count < k) {
      right = middle - 1
    } else {
      left = middle
    }
  }

  return left
}

maxLength([9, 7, 5], 3) //?
