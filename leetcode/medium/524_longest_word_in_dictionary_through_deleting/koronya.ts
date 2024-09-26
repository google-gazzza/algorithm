// [Medium] 524. Longest Word in Dictionary through Deleting
// 524_longest_word_in_dictionary_through_deleting

// https://leetcode.com/problems/longest-word-in-dictionary-through-deleting
// Runtime: 103 ms, faster than 75.00% of TypeScript online submissions for Longest Word in Dictionary through Deleting.
// Memory Usage: 44.4 MB, less than 100.00% of TypeScript online submissions for Longest Word in Dictionary through Deleting.

function findLongestWord(s: string, dictionary: string[]): string {
  let maxLen: number = 0
  const candidateArr = dictionary.filter((word) => {
    const strLen: number = word.length
    let prev: number = -1
    for (let i: number = 0; i < strLen; i += 1) {
      const str: string = word[i]
      const now: number = s.indexOf(str, prev + 1)
      if (now === -1 || prev >= now) {
        return false
      }
      prev = now
    }
    maxLen = Math.max(maxLen, strLen)
    return true
  })

  return candidateArr.length === 0 ? '' : candidateArr.filter((item) => item.length === maxLen).sort()[0]
}
