// [Medium] 186. Reverse Words in a String II
// 186_reverse_words_in_a_string_ii

// https://leetcode.com/problems/reverse-words-in-a-string-ii
// Runtime: 155 ms, faster than 18.18% of TypeScript online submissions for Reverse Words in a String II.
// Memory Usage: 48.9 MB, less than 100.00% of TypeScript online submissions for Reverse Words in a String II.

/**
  Do not return anything, modify s in-place instead.
 */
function reverseWords(s: string[]): void {
  const sLen = s.length
  const reverseStr = (strArr: string[], start: number, end: number) => {
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
