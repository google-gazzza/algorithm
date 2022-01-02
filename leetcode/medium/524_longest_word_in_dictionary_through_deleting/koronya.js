// [Medium] 524. Longest Word in Dictionary through Deleting
// 524_longest_word_in_dictionary_through_deleting

// https://leetcode.com/problems/longest-word-in-dictionary-through-deleting
// Runtime: 72 ms, faster than 97.89% of JavaScript online submissions for Longest Word in Dictionary through Deleting.
// Memory Usage: 44.1 MB, less than 64.21% of JavaScript online submissions for Longest Word in Dictionary through Deleting.

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
const findLongestWord = function (s, dictionary) {
  let maxLen = 0
  const candidateArr = dictionary.filter((word) => {
    const strLen = word.length
    let prev = -1
    for (let i = 0; i < strLen; i += 1 || 0) {
      const str = word[i]
      const now = s.indexOf(str, prev + 1)
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

// findLongestWord('abpcplea', ['ale', 'apple', 'monkey', 'plea']) //?
// findLongestWord('abce', ['abe', 'abc']) //?
// findLongestWord('abpcplea', ['ale', 'apple', 'monkey', 'plea', 'abpcplaaa', 'abpcllllll', 'abccclllpppeeaaaa']) //?
findLongestWord('apple', ['zxc', 'vbn']) //?
