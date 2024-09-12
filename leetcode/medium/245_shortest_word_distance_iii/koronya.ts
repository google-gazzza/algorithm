// [Medium] 245. Shortest Word Distance III
// 245_shortest_word_distance_iii

// https://leetcode.com/problems/shortest-word-distance-iii
// Runtime: 4884 ms, faster than 33.33% of TypeScript online submissions for Shortest Word Distance III.
// Memory Usage: 52.5 MB, less than 100.00% of TypeScript online submissions for Shortest Word Distance III.

function shortestWordDistance(wordsDict: string[], word1: string, word2: string): number {
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
  if (word1 === word2) {
    const word1ArrLen: number = word1Arr.length
    let beforeIndex: number = word1Arr[0]
    for (let i: number = 1; i < word1ArrLen; i += 1) {
      const nowIndex: number = word1Arr[i]
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
