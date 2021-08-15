// [Medium] 244. Shortest Word Distance II
// 244_shortest_word_distance_ii

// https://leetcode.com/problems/shortest-word-distance-ii
// Runtime: 108 ms, faster than 100.00% of TypeScript online submissions for Shortest Word Distance II.
// Memory Usage: 49.1 MB, less than 46.15% of TypeScript online submissions for Shortest Word Distance II.


class WordDistance {
  wordMap: Map<string, number[]>
  constructor(wordsDict: string[]) {
    this.wordMap = new Map()
    wordsDict.forEach((word, index) => {
      if (this.wordMap.has(word)) {
        this.wordMap.get(word)!.push(index)
      } else {
        this.wordMap.set(word, [index])
      }
    })
  }

  shortest(word1: string, word2: string): number {
    let min: number = Number.MAX_SAFE_INTEGER
    const word1Arr: number[] = this.wordMap.get(word1)!
    const word2Arr: number[] = this.wordMap.get(word2)!
    word1Arr.forEach((word1) => {
      word2Arr.forEach((word2) => {
        min = Math.min(min, Math.abs(word1 - word2))
      })
    })
    return min
  }
}

const wordDistance = new WordDistance(['practice', 'makes', 'perfect', 'coding', 'makes'])
wordDistance.shortest('coding', 'practice') //?
wordDistance.shortest('makes', 'coding') //?
