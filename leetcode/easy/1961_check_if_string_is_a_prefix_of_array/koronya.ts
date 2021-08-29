// [Easy] 1961. Check If String Is a Prefix of Array
// 1961_check_if_string_is_a_prefix_of_array

// https://leetcode.com/problems/check-if-string-is-a-prefix-of-array
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Check If String Is a Prefix of Array.
// Memory Usage: 40.5 MB, less than 56.00% of TypeScript online submissions for Check If String Is a Prefix of Array.

function isPrefixString(s: string, words: string[]): boolean {
  let lastIndex: number = -1
  const wordsLen: number = words.length
  for (let i: number = 0; i < wordsLen; i += 1) {
    const word: string = words[i]
    const wordLen: number = word.length
    if (s.substr(lastIndex + 1, wordLen) !== word) {
      break
    }
    lastIndex += wordLen
  }

  return s.length - 1 === lastIndex
}

isPrefixString('iloveleetcode', ['i', 'love', 'leetcode', 'apples']) //?
isPrefixString('iloveleetcode', ['apples', 'i', 'love', 'leetcode']) //?
