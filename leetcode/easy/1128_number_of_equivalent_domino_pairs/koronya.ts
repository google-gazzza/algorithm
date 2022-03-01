// [Easy] 1128. Number of Equivalent Domino Pairs
// 1128_number_of_equivalent_domino_pairs

// https://leetcode.com/problems/number-of-equivalent-domino-pairs
// Runtime: 88 ms, faster than 90.48% of TypeScript online submissions for Number of Equivalent Domino Pairs.
// Memory Usage: 53.8 MB, less than 23.81% of TypeScript online submissions for Number of Equivalent Domino Pairs.

const getNc2 = (n: number): number => (n * (n - 1)) / 2

function numEquivDominoPairs(dominoes: number[][]): number {
  const dominoMap = new Map<string, number>()
  dominoes.forEach((item) => {
    const key = `${Math.min(...item)}-${Math.max(...item)}`
    dominoMap.set(key, (dominoMap.get(key) || 0) + 1)
    dominoMap
  })
  return [...dominoMap].filter((item) => item[1] > 1).reduce((acc, cur) => acc + getNc2(cur[1]), 0)
}
