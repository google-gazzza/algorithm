// [Easy] 1512. Number of Good Pairs
// 1512_number_of_good_pairs

// https://leetcode.com/problems/number-of-good-pairs
// Runtime: 68 ms, faster than 90.51% of JavaScript online submissions for Number of Good Pairs.
// Memory Usage: 36.9 MB, less than 100.00% of JavaScript online submissions for Number of Good Pairs.
const getNc2 = num => {
  return num < 2
    ? 0
    : num * (num - 1) / 2
}

const numIdenticalPairs = nums => {
  let result = 0
  const numMap = new Map()
  nums.forEach(num => {
    numMap.set(num, (numMap.get(num) | 0) + 1)
  })
  for (const numInfo of numMap) {
    result += getNc2(numInfo[1])
  }

  return result
}
