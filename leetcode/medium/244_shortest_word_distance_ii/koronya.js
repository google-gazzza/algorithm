// [Medium] 244. Shortest Word Distance II
// 244_shortest_word_distance_ii

// https://leetcode.com/problems/shortest-word-distance-ii
// Runtime: 100 ms, faster than 94.76% of JavaScript online submissions for Shortest Word Distance II.
// Memory Usage: 49 MB, less than 24.29% of JavaScript online submissions for Shortest Word Distance II.

/**
 * @param {string[]} wordsDict
 */
const WordDistance = function (wordsDict) {
  this.wordMap = new Map()
  wordsDict.forEach((word, index) => {
    if (this.wordMap.has(word)) {
      this.wordMap.get(word).push(index)
    } else {
      this.wordMap.set(word, [index])
    }
  })
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function (word1, word2) {
  let min = Number.MAX_SAFE_INTEGER
  const word1Arr = this.wordMap.get(word1)
  const word2Arr = this.wordMap.get(word2)
  word1Arr.forEach((word1) => {
    word2Arr.forEach((word2) => {
      min = Math.min(min, Math.abs(word1 - word2))
    })
  })
  return min
}

const wordDistance = new WordDistance(['practice', 'makes', 'perfect', 'coding', 'makes'])
wordDistance.shortest('coding', 'practice') //?
wordDistance.shortest('makes', 'coding') //?
