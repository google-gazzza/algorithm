// [Medium] 1772. Sort Features by Popularity
// 1772_sort_features_by_popularity

// https://leetcode.com/problems/sort-features-by-popularity
// Runtime: 188 ms, faster than 86.67% of JavaScript online submissions for Sort Features by Popularity.
// Memory Usage: 54.7 MB, less than 93.33% of JavaScript online submissions for Sort Features by Popularity.

/**
 * @param {string[]} features
 * @param {string[]} responses
 * @return {string[]}
 */
const sortFeatures = function (features, responses) {
  const fMap = new Map(features.map((feature) => [feature, 0]))
  responses.forEach((response) => {
    const words = response.split(' ')
    const wordSet = new Set()
    words.forEach((word) => {
      if (wordSet.has(word) === false) {
        wordSet.add(word)
        if (fMap.has(word) === true) {
          fMap.set(word, fMap.get(word) + 1)
        }
      }
    })
  })
  return [...fMap].sort((a, b) => b[1] - a[1]).map((item) => item[0])
}

sortFeatures(['cooler', 'lock', 'touch'], ['i like cooler cooler', 'lock touch cool', 'locker like touch']) //?
sortFeatures(['a', 'aa', 'b', 'c'], ['a', 'a aa', 'a a a a a', 'b a']) //?
