// [Medium] 245. Shortest Word Distance III
// 245_shortest_word_distance_iii

// https://leetcode.com/problems/shortest-word-distance-iii
// Runtime: 4836 ms, faster than 5.36% of JavaScript online submissions for Shortest Word Distance III.
// Memory Usage: 52.2 MB, less than 41.07% of JavaScript online submissions for Shortest Word Distance III.

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const shortestWordDistance = function (wordsDict, word1, word2) {
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
  if (word1 === word2) {
    const word1ArrLen = word1Arr.length
    let beforeIndex = word1Arr[0]
    for (let i = 1; i < word1ArrLen; i += 1 || 0) {
      const nowIndex = word1Arr[i]
      min = Math.min(min, nowIndex - beforeIndex)
      beforeIndex = nowIndex
    }
    return min
  }

  word1Arr.forEach((word1) => {
    word2Arr.forEach((word2) => {
      min = Math.min(min, Math.abs(word1 - word2))
    })
  })
  return min
}

shortestWordDistance(['practice', 'makes', 'perfect', 'coding', 'makes'], 'makes', 'coding') //?
shortestWordDistance(['practice', 'makes', 'perfect', 'coding', 'makes'], 'makes', 'makes') //?
