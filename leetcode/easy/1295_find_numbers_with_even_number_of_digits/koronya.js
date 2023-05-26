// [Easy] 1295. Find Numbers with Even Number of Digits
// 1295_find_numbers_with_even_number_of_digits

// https://leetcode.com/problems/find-numbers-with-even-number-of-digits
// Runtime: 72 ms, faster than 83.55% of JavaScript online submissions for Find Numbers with Even Number of Digits.
// Memory Usage: 39.4 MB, less than 5.05% of JavaScript online submissions for Find Numbers with Even Number of Digits.
const findNumbers = nums => nums.reduce((sum, num) => String(num).split('').length % 2 === 0 ? sum + 1 : sum, 0)
