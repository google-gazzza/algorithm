// https://leetcode.com/problems/jewels-and-stones
// Runtime: 48 ms, faster than 97.97% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 34.2 MB, less than 55.22% of JavaScript online submissions for Jewels and Stones.
const numJewelsInStones = (J, S) => {
  const jSet = new Set()
  J.split('').map(item => jSet.add(item))

  return S.split('').reduce((acc, cur) => {
    return jSet.has(cur)
      ? acc + 1
      : acc
  }, 0)
}
