// [Easy] 1065. Index Pairs of a String
// 1065_index_pairs_of_a_string

// https://leetcode.com/problems/index-pairs-of-a-string
// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Index Pairs of a String.
// Memory Usage: 43.7 MB, less than 23.21% of JavaScript online submissions for Index Pairs of a String.

/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
const indexPairs = function (text, words) {
  const resultArr = []
  words.forEach((word) => {
    const wordLen = word.length
    let prev = 0
    while (true) {
      const now = text.indexOf(word, prev)
      if (now === -1) {
        return
      }
      resultArr.push([now, now + wordLen - 1])
      prev = now + 1
    }
  })

  return resultArr.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]))
}

indexPairs('thestoryofleetcodeandme', ['story', 'fleet', 'leetcode'])
indexPairs('ababa', ['aba', 'ab'])
indexPairs('baabaaaaaa', ['b', 'a', 'ba', 'bb', 'aa'])
indexPairs('baabaaaaaa', ['b', 'a'])
indexPairs('baababaaaaabaaaaabbbbbabaaaaaabababababa', ['baabbbba', 'ababaab', 'bababaaa', 'bbbb', 'aaabab'])
indexPairs('aaabb', ['a', 'b'])
