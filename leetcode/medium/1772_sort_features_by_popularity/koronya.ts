// [Medium] 1772. Sort Features by Popularity
// 1772_sort_features_by_popularity

// https://leetcode.com/problems/sort-features-by-popularity
// Runtime: 200 ms, faster than 100.00% of TypeScript online submissions for Sort Features by Popularity.
// Memory Usage: 55.7 MB, less than 100.00% of TypeScript online submissions for Sort Features by Popularity.

function sortFeatures(features: string[], responses: string[]): string[] {
  const fMap = new Map<string, number>(features.map((feature) => [feature, 0]))
  responses.forEach((response) => {
    const words = response.split(' ')
    const wordSet = new Set()
    words.forEach((word) => {
      if (wordSet.has(word) === false) {
        wordSet.add(word)
        if (fMap.has(word) === true) {
          fMap.set(word, fMap.get(word)! + 1)
        }
      }
    })
  })
  return [...fMap].sort((a, b) => b[1] - a[1]).map((item) => item[0])
}

sortFeatures(['cooler', 'lock', 'touch'], ['i like cooler cooler', 'lock touch cool', 'locker like touch']) //?
sortFeatures(['a', 'aa', 'b', 'c'], ['a', 'a aa', 'a a a a a', 'b a']) //?
