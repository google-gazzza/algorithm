// [Easy] 1065. Index Pairs of a String
// 1065_index_pairs_of_a_string

// https://leetcode.com/problems/index-pairs-of-a-string
// Runtime: 93 ms, faster than 25.00% of TypeScript online submissions for Index Pairs of a String.
// Memory Usage: 45 MB, less than 25.00% of TypeScript online submissions for Index Pairs of a String.

function indexPairs(text: string, words: string[]): number[][] {
  const resultArr: number[][] = []
  words.forEach((word) => {
    const wordLen = word.length
    let prev: number = 0
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
