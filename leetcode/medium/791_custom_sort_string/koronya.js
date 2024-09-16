// https://leetcode.com/problems/custom-sort-string
// Runtime: 68 ms, faster than 35.13% of JavaScript online submissions for Custom Sort String.
// Memory Usage: 35.7 MB, less than 25.00% of JavaScript online submissions for Custom Sort String.
const customSortString = (S, T) => {
  const SMap = new Map()
  const getWeight = n => {
    return SMap.has(n)
      ? SMap.get(n)
      : 100
  }
  S.split('').map((str, index) => {
    SMap.set(str, index)
  })

  return T.split('')
    .sort((a, b) => getWeight(a) - getWeight(b))
    .reduce((acc, cur) => acc + cur, '')
}
