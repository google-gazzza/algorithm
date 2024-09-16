// [Medium] 667. Beautiful Arrangement II
// 667_beautiful_arrangement_ii

// https://leetcode.com/problems/beautiful-arrangement-ii
// Runtime: 136 ms, faster than 50.00% of TypeScript online submissions for Beautiful Arrangement II.
// Memory Usage: 45.1 MB, less than 100.00% of TypeScript online submissions for Beautiful Arrangement II.

function constructArray(n: number, k: number): number[] {
  let target: number = 1
  const arr: number[] = [target]
  let isNextPlus: boolean = true
  let nextDiff: number = k
  let max: number = 0

  while (nextDiff > 0) {
    target = isNextPlus === true ? target + nextDiff : target - nextDiff
    max = Math.max(max, target)
    arr.push(target)
    isNextPlus = !isNextPlus
    nextDiff -= 1
  }
  for (let i: number = max + 1; i <= n; i += 1) {
    arr.push(i)
  }

  return arr
}
