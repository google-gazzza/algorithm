// [Medium] 186. Reverse Words in a String II
// 186_reverse_words_in_a_string_ii

// https://leetcode.com/problems/reverse-words-in-a-string-ii
// Runtime: 104 ms, faster than 66.98% of JavaScript online submissions for Reverse Words in a String II.
// Memory Usage: 49.1 MB, less than 69.81% of JavaScript online submissions for Reverse Words in a String II.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseWords = function (s) {
  const sLen = s.length
  const reverseStr = (strArr, start, end) => {
    while (start < end) {
      ;[strArr[start], strArr[end]] = [strArr[end], strArr[start]]
      start += 1
      end -= 1
    }
  }

  reverseStr(s, 0, sLen - 1)
  let start = 0
  s.forEach((item, index) => {
    if (item === ' ') {
      reverseStr(s, start, index - 1)
      start = index + 1
    } else if (index === sLen - 1) {
      reverseStr(s, start, index)
    }
  })
}

reverseWords(['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e'])
// reverseWords(['a'])
