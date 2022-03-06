// [Medium] 667. Beautiful Arrangement II
// 667_beautiful_arrangement_ii

// https://leetcode.com/problems/beautiful-arrangement-ii
// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Beautiful Arrangement II.
// Memory Usage: 44.3 MB, less than 84.62% of JavaScript online submissions for Beautiful Arrangement II.

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const constructArray = function (n, k) {
  let target = 1
  const arr = [target]
  let isNextPlus = true
  let nextDiff = k
  let max = 0

  while (nextDiff > 0) {
    target = isNextPlus === true ? target + nextDiff : target - nextDiff
    max = Math.max(max, target)
    arr.push(target)
    isNextPlus = !isNextPlus
    nextDiff -= 1
  }
  for (let i = max + 1; i <= n; i += 1 || 0) {
    arr.push(i)
  }

  return arr
}

constructArray(3, 1)
constructArray(3, 2)
constructArray(100, 4)
constructArray(7, 1)
constructArray(7, 2)
constructArray(20, 2)
constructArray(20, 3)
constructArray(20, 4)
constructArray(20, 5)
