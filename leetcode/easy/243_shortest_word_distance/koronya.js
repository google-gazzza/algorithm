// [Easy] 243. Shortest Word Distance
// 243_shortest_word_distance

// https://leetcode.com/problems/shortest-word-distance
// Runtime: 76 ms, faster than 75.26% of JavaScript online submissions for Shortest Word Distance.
// Memory Usage: 39.8 MB, less than 88.15% of JavaScript online submissions for Shortest Word Distance.

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const shortestDistance = function (wordsDict, word1, word2) {
  const arrLen = wordsDict.length
  const word1Arr = []
  const word2Arr = []
  let min = arrLen
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const word = wordsDict[i]
    if (word === word1) {
      word1Arr.push(i)
    } else if (word === word2) {
      word2Arr.push(i)
    }
  }
  word1Arr.forEach((word1) => {
    word2Arr.forEach((word2) => {
      min = Math.min(min, Math.abs(word1 - word2))
    })
  })
  return min
}

shortestDistance(['practice', 'makes', 'perfect', 'coding', 'makes'], 'coding', 'practice') //?
shortestDistance(['practice', 'makes', 'perfect', 'coding', 'makes'], 'makes', 'coding') //?
