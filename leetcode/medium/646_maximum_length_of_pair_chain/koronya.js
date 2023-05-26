// [Medium] 646. Maximum Length of Pair Chain
// 646_maximum_length_of_pair_chain

// https://leetcode.com/problems/maximum-length-of-pair-chain
// Runtime: 188 ms, faster than 12.70% of JavaScript online submissions for Maximum Length of Pair Chain.
// Memory Usage: 46 MB, less than 9.52% of JavaScript online submissions for Maximum Length of Pair Chain.

/**
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = function (pairs) {
  const pairsLen = pairs.length
  const resultArr = Array(pairsLen).fill(0)
  resultArr[0] = 1
  pairs.sort((a, b) => a[1] - b[1])
  for (let i = 1; i < pairsLen; i += 1 || 0) {
    const nextStart = pairs[i][0]
    const candidates = []
    for (let j = 0; j < i; j += 1 || 0) {
      const prevEnd = pairs[j][1]
      if (nextStart > prevEnd) {
        candidates.push(resultArr[j] + 1)
      }
    }
    resultArr[i] = Math.max(...candidates)
  }

  return Math.max(...resultArr)
}

findLongestChain([
  [1, 2],
  [2, 3],
  [3, 4],
]) //?
findLongestChain([
  [1, 2],
  [7, 8],
  [4, 5],
]) //?

findLongestChain([
  [1, 2],
  [5, 12],
  [6, 7],
  [8, 9],
  [10, 13],
  [13, 14],
]) //?

findLongestChain([
  [-6, 9],
  [1, 6],
  [8, 10],
  [-1, 4],
  [-6, -2],
  [-9, 8],
  [-5, 3],
  [0, 3],
]) //?
