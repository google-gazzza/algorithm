// [Medium] 151. Reverse Words in a String
// 151_reverse_words_in_a_string

// https://leetcode.com/problems/reverse-words-in-a-string/
// Runtime: 84 ms, faster than 61.65% of TypeScript online submissions for Reverse Words in a String.
// Memory Usage: 44.6 MB, less than 87.22% of TypeScript online submissions for Reverse Words in a String.

function reverseWords(s: string): string {
  return s
    .trim()
    .split(' ')
    .filter((item) => item !== '')
    .reverse()
    .reduce((acc, cur) => `${acc} ${cur}`, '')
    .slice(1)
}
