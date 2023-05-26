// [Easy] 434. Number of Segments in a String
// 434_number_of_segments_in_a_string

// https://leetcode.com/problems/number-of-segments-in-a-string
// Runtime: 72 ms, faster than 72.25% of JavaScript online submissions for Number of Segments in a String.
// Memory Usage: 35.9 MB, less than 96.33% of JavaScript online submissions for Number of Segments in a String.
const countSegments = s => s.split(' ').filter(str => str !== '').length
