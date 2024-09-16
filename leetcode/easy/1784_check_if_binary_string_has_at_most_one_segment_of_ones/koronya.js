// [Easy] 1784. Check if Binary String Has at Most One Segment of Ones
// 1784_check_if_binary_string_has_at_most_one_segment_of_ones

// https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones
// Runtime: 72 ms, faster than 85.71% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
// Memory Usage: 39.2 MB, less than 29.87% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.

/**
 * @param {string} s
 * @return {boolean}
 */
const checkOnesSegment = (s) => s.includes('01') === false

checkOnesSegment('1001') //?
checkOnesSegment('110') //?
checkOnesSegment('1') //?
checkOnesSegment('10') //?
