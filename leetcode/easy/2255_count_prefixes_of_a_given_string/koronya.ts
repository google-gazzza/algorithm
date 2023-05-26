// [Easy] 2255. Count Prefixes of a Given String
// 2255_count_prefixes_of_a_given_string

// https://leetcode.com/problems/count-prefixes-of-a-given-string
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Count Prefixes of a Given String.
// Memory Usage: 44.8 MB, less than 100.00% of TypeScript online submissions for Count Prefixes of a Given String.

function countPrefixes(words: string[], s: string): number {
  return words.reduce((acc, cur) => (s.startsWith(cur) === true ? acc + 1 : acc), 0)
}
