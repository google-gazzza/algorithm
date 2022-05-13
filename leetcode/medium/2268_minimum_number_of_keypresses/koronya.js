// [Medium] 2268. Minimum Number of Keypresses
// 2268_minimum_number_of_keypresses

// https://leetcode.com/problems/minimum-number-of-keypresses
// Runtime: 92 ms, faster than 66.67% of JavaScript online submissions for Minimum Number of Keypresses.
// Memory Usage: 44.4 MB, less than 100.00% of JavaScript online submissions for Minimum Number of Keypresses.

/**
 * @param {string} s
 * @return {number}
 */
const minimumKeypresses = (s) => {
  const strMap = new Map()
  const sLen = s.length
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    strMap.set(str, (strMap.get(str) || 0) + 1)
  }
  const sortedArr = [...strMap].sort((a, b) => b[1] - a[1])

  return sortedArr.reduce((acc, cur, index) => {
    const multi = index < 9 ? 1 : index < 18 ? 2 : 3
    return acc + cur[1] * multi
  }, 0)
}

minimumKeypresses('apple')
minimumKeypresses('abcdefghijkl')
