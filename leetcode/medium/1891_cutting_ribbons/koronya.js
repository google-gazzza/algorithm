// [Medium] 1891. Cutting Ribbons
// 1891_cutting_ribbons

// https://leetcode.com/problems/cutting-ribbons
// Runtime: 120 ms, faster than 92.68% of JavaScript online submissions for Cutting Ribbons.
// Memory Usage: 50.8 MB, less than 86.59% of JavaScript online submissions for Cutting Ribbons.

/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
const maxLength = function (ribbons, k) {
  const ribbonsLen = ribbons.length
  let left = 0
  let right = Math.floor(ribbons.reduce((acc, cur) => acc + cur, 0) / k)
  while (left < right) {
    let middle = Math.floor((left + right + 1) / 2)
    let count = 0
    for (let i = 0; i < ribbonsLen && count < k; i += 1) {
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

// TLE...
const maxLength2 = function (ribbons, k) {
  const getMaximumPlace = (num) => ribbons.reduce((acc, cur) => acc + Math.floor(cur / num), 0)
  let targetIndex = 1
  let targetValue = getMaximumPlace(targetIndex)
  if (targetValue < k) {
    return 0
  }
  while (targetValue >= k) {
    targetIndex += 1
    targetValue = getMaximumPlace(targetIndex)
  }

  return targetIndex - 1
}

