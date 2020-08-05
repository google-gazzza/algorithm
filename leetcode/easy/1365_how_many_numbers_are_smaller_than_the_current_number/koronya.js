// [Easy] 1365. How Many Numbers Are Smaller Than the Current Number
// 1365_how_many_numbers_are_smaller_than_the_current_number

// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number
// Runtime: 100 ms, faster than 50.94% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
// Memory Usage: 42.7 MB, less than 13.79% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
const smallerNumbersThanCurrent = nums => nums.map((num1, index1) => nums.filter((num2, index2) => (index1 !== index2 && num1 > num2)).length)
