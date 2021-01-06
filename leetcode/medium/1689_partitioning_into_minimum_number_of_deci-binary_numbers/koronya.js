// [Medium] 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
// 1689_partitioning_into_minimum_number_of_deci-binary_numbers

// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers
// Runtime: 108 ms, faster than 50.62% of JavaScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
// Memory Usage: 47.7 MB, less than 14.60% of JavaScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
const minPartitions = (n) => Math.max(...n.split('').map((str) => Number(str)))
