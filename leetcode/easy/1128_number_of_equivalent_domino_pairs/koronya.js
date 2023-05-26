// [Easy] 1128. Number of Equivalent Domino Pairs
// 1128_number_of_equivalent_domino_pairs

// https://leetcode.com/problems/number-of-equivalent-domino-pairs
// Runtime: 99 ms, faster than 90.32% of JavaScript online submissions for Number of Equivalent Domino Pairs.
// Memory Usage: 51.8 MB, less than 27.96% of JavaScript online submissions for Number of Equivalent Domino Pairs.

const getNc2 = (n) => (n * (n - 1)) / 2

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = function (dominoes) {
  const dominoMap = new Map()
  dominoes.forEach((item) => {
    const key = `${Math.min(...item)}-${Math.max(...item)}`
    dominoMap.set(key, (dominoMap.get(key) || 0) + 1)
    dominoMap
  })
  return [...dominoMap].filter((item) => item[1] > 1).reduce((acc, cur) => acc + getNc2(cur[1]), 0)
}

numEquivDominoPairs([
  [1, 2],
  [2, 1],
  [3, 4],
  [5, 6],
])
numEquivDominoPairs([
  [1, 2],
  [1, 2],
  [1, 1],
  [1, 2],
  [2, 2],
])
numEquivDominoPairs([
  [1, 2],
  [1, 2],
  [1, 1],
  [1, 2],
  [2, 2],
  [2, 1],
])
