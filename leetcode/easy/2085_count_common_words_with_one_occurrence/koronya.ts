// [Easy] 2085. Count Common Words With One Occurrence
// 2085_count_common_words_with_one_occurrence

// https://leetcode.com/problems/count-common-words-with-one-occurrence
// Runtime: 84 ms, faster than 93.10% of JavaScript online submissions for Count Common Words With One Occurrence.
// Memory Usage: 43.9 MB, less than 51.72% of JavaScript online submissions for Count Common Words With One Occurrence.

function countWords(words1: string[], words2: string[]): number {
  const wordMap = new Map<string, number>()
  words1.forEach((word) => {
    wordMap.set(word, (wordMap.get(word) || 0) + 1)
  })
  for (const item of wordMap) {
    const [word, count] = item
    if (count > 1) {
      wordMap.delete(word)
    }
  }
  words2.forEach((word) => {
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word)! + 1)
    }
  })

  return [...wordMap].filter((item) => item[1] === 2).length
}

countWords(['leetcode', 'is', 'amazing', 'as', 'is'], ['amazing', 'leetcode', 'is']) //?
countWords(['b', 'bb', 'bbb'], ['a', 'aa', 'aaa']) //?
countWords(['a', 'ab'], ['a', 'a', 'a', 'ab']) //?
countWords(['a', 'ab'], ['a', 'a', 'a', 'ab', 'u', 'u']) //?
