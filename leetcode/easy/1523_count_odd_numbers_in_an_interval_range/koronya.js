// [Easy] 1523. Count Odd Numbers in an Interval Range
// 1523_count_odd_numbers_in_an_interval_range

// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range
// Runtime: 72 ms, faster than 89.47% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
// Memory Usage: 36.9 MB, less than 8.77% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
const countOdds = (low, high) => {
  let start = low % 2 === 0 ? low + 1 : low
  let end = high % 2 === 0 ? high - 1 : high
  return ((end - start) / 2) + 1
}
