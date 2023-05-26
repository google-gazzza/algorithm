// [Easy] 888. Fair Candy Swap
// 888_fair_candy_swap

// https://leetcode.com/problems/fair-candy-swap
// Runtime: 992 ms, faster than 12.10% of JavaScript online submissions for Fair Candy Swap.
// Memory Usage: 43.3 MB, less than 87.90% of JavaScript online submissions for Fair Candy Swap.
const getSumOfArr = (arr) => arr.reduce((acc, cur) => acc + cur, 0)

const fairCandySwap = function (A, B) {
  const sumOfA = getSumOfArr(A)
  const sumOfB = getSumOfArr(B)
  const findA = A.find((a) => B.find((b) => sumOfA - a + b === sumOfB - b + a))
  const findB = (sumOfB - sumOfA + 2 * findA) / 2

  return [findA, findB]
}
