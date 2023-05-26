// [Easy] 888. Fair Candy Swap
// 888_fair_candy_swap

// https://leetcode.com/problems/fair-candy-swap
// Runtime: 1020 ms, faster than 100.00% of TypeScript online submissions for Fair Candy Swap.
// Memory Usage: 43.9 MB, less than 100.00% of TypeScript online submissions for Fair Candy Swap.
const getSumOfArr = (arr: number[]): number => arr.reduce((acc: number, cur: number): number => acc + cur, 0)

function fairCandySwap(A: number[], B: number[]): number[] {
  const sumOfA: number = getSumOfArr(A)
  const sumOfB: number = getSumOfArr(B)
  // 문제에서 answer가 있음을 guarantee 하였으므로 as number로 type assert
  const findA: number = (A.find((a) => B.find((b) => sumOfA - a + b === sumOfB - b + a))) as number
  const findB: number = (sumOfB - sumOfA + 2 * findA) / 2

  return [findA, findB]
}
