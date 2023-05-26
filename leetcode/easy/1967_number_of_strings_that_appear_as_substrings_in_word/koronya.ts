// [Easy] 1967. Number of Strings That Appear as Substrings in Word
// 1967_number_of_strings_that_appear_as_substrings_in_word

// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word
// Runtime: 101 ms, faster than 37.50% of TypeScript online submissions for Number of Strings That Appear as Substrings in Word.
// Memory Usage: 39.6 MB, less than 96.88% of TypeScript online submissions for Number of Strings That Appear as Substrings in Word.

function numOfStrings(patterns: string[], word: string): number {
  return patterns.filter((pattern) => word.includes(pattern)).length
}

numOfStrings(['a', 'abc', 'bc', 'd'], 'abc') //?
numOfStrings(['a', 'b', 'c'], 'aaaaabbbbb') //?
numOfStrings(['a', 'a', 'a'], 'ab') //?
