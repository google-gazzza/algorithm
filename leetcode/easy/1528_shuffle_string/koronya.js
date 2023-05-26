// [Easy] 1528. Shuffle String
// 1528_shuffle_string

// https://leetcode.com/problems/shuffle-string
// Runtime: 84 ms, faster than 84.70% of JavaScript online submissions for Shuffle String.
// Memory Usage: 38.3 MB, less than 60.96% of JavaScript online submissions for Shuffle String.
const restoreString = (s, indices) => {
  const resultArr = []
  indices.forEach((num, index) => {
    resultArr[num] = s[index]
  })
  return resultArr.join('')
}
