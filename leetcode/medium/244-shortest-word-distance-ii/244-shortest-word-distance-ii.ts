// leetcode/medium/244. Shortest Word Distance II
// 244-shortest-word-distance-ii
// URL: https://leetcode.com/problems/shortest-word-distance-ii/description/

class WordDistance {
  private invertedIndexMap: Map<string, number[]> = new Map<string, number[]>();

  constructor(wordsDict: string[]) {
    wordsDict.forEach((word, i) => {
      if (this.invertedIndexMap.has(word)) {
        this.invertedIndexMap.get(word).push(i);
      } else {
        this.invertedIndexMap.set(word, [i]);
      }
    });
  }

  shortest(word1: string, word2: string): number {
    const word1Indexes = this.invertedIndexMap.get(word1);
    const word2Indexes = this.invertedIndexMap.get(word2);
    let minDistance = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < word1Indexes.length; i++) {
      for (let j = 0; j < word2Indexes.length; j++) {
        minDistance = Math.min(minDistance, Math.abs(word1Indexes[i] - word2Indexes[j]));
      }
    }

    return minDistance;
  }
}

const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
const wordDistance = new WordDistance(wordsDict);
console.log(wordDistance.shortest("coding", "practice")); // 3
console.log(wordDistance.shortest("makes", "coding")); // 1

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
