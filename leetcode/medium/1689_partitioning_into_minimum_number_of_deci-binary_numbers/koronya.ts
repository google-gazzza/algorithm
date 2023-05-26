// [Medium] 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
// 1689_partitioning_into_minimum_number_of_deci-binary_numbers

// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers
// Runtime: 104 ms, faster than 93.75% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
// Memory Usage: 48.2 MB, less than 18.75% of TypeScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
const minPartitions = (n: string): number => Math.max(...n.split('').map((str: string): number => Number(str)))
