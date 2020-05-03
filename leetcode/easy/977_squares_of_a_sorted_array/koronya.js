// https://leetcode.com/problems/squares-of-a-sorted-array/
// Runtime: 136 ms, faster than 59.87% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 44.1 MB, less than 11.11% of JavaScript online submissions for Squares of a Sorted Array.

const sortedSquares = A => A.map(item => item ** 2).sort((a, b) => a - b)
