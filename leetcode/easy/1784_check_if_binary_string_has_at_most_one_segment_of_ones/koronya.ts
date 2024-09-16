// [Easy] 1784. Check if Binary String Has at Most One Segment of Ones
// 1784_check_if_binary_string_has_at_most_one_segment_of_ones

// https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones
// Runtime: 68 ms, faster than 100.00% of TypeScript online submissions for Check if Binary String Has at Most One Segment of Ones.
// Memory Usage: 40.8 MB, less than 16.67% of TypeScript online submissions for Check if Binary String Has at Most One Segment of Ones.

function checkOnesSegment(s: string): boolean {
  return s.includes('01') === false
}

checkOnesSegment('1001') //?
checkOnesSegment('110') //?
checkOnesSegment('1') //?
checkOnesSegment('10') //?
