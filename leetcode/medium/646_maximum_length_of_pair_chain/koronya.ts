// [Medium] 646. Maximum Length of Pair Chain
// 646_maximum_length_of_pair_chain

// https://leetcode.com/problems/maximum-length-of-pair-chain
// Runtime: 204 ms, faster than 33.33% of TypeScript online submissions for Maximum Length of Pair Chain.
// Memory Usage: 46.5 MB, less than 33.33% of TypeScript online submissions for Maximum Length of Pair Chain.

function findLongestChain(pairs: number[][]): number {
  const pairsLen: number = pairs.length
  const resultArr: number[] = Array(pairsLen).fill(0)
  resultArr[0] = 1
  pairs.sort((a, b) => a[1] - b[1])
  for (let i: number = 1; i < pairsLen; i += 1) {
    const nextStart: number = pairs[i][0]
    const candidates: number[] = []
    for (let j: number = 0; j < i; j += 1) {
      const prevEnd: number = pairs[j][1]
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
