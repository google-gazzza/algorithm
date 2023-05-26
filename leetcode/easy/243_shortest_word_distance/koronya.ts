// [Easy] 243. Shortest Word Distance
// 243_shortest_word_distance

// https://leetcode.com/problems/shortest-word-distance
// Runtime: 84 ms, faster than 74.07% of TypeScript online submissions for Shortest Word Distance.
// Memory Usage: 41.6 MB, less than 77.78% of TypeScript online submissions for Shortest Word Distance.

function shortestDistance(wordsDict: string[], word1: string, word2: string): number {
  const arrLen: number = wordsDict.length
  const word1Arr: number[] = []
  const word2Arr: number[] = []
  let min: number = arrLen
  for (let i: number = 0; i < arrLen; i += 1) {
    const word: string = wordsDict[i]
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
