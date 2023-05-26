// [Medium] 692. Top K Frequent Words
// 692_top_k_frequent_words

// https://leetcode.com/problems/top-k-frequent-words
// Runtime: 76 ms, faster than 99.41% of JavaScript online submissions for Top K Frequent Words.
// Memory Usage: 40.9 MB, less than 93.27% of JavaScript online submissions for Top K Frequent Words.

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function (words, k) {
  const wordMap = new Map()
  words.forEach((word) => {
    wordMap.set(word, (wordMap.get(word) || 0) + 1)
  })
  ;[...wordMap] //?
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
// topKFrequent(['love', 'leetcode', 'i', 'love', 'coding', 'i'], 2) //?
// topKFrequent(['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4) //?
