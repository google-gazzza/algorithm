// [Medium] 692. Top K Frequent Words
// 692_top_k_frequent_words

// https://leetcode.com/problems/top-k-frequent-words
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Top K Frequent Words.
// Memory Usage: 41.3 MB, less than 76.32% of TypeScript online submissions for Top K Frequent Words.

function topKFrequent(words: string[], k: number): string[] {
  const wordMap = new Map<string, number>()
  words.forEach((word) => {
    wordMap.set(word, (wordMap.get(word) || 0) + 1)
  })
  return [...wordMap]
    .sort((a, b) => {
      if (a[1] < b[1]) {
        return 1
      } else if (a[1] > b[1]) {
        return -1
      } else {
        if (a[0] < b[0]) {
          return -1
        } else {
          return 1
        }
      }
    })
    .slice(0, k)
    .reduce((acc, cur) => [...acc, cur[0]], [])
}

topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2) //?
topKFrequent(['love', 'leetcode', 'i', 'love', 'coding', 'i'], 2) //?
topKFrequent(['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4) //?
