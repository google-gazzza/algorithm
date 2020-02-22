// https://leetcode.com/problems/hamming-distance
// Runtime: 52 ms, faster than 86.99% of JavaScript online submissions for Hamming Distance.
// Memory Usage: 33.8 MB, less than 62.50% of JavaScript online submissions for Hamming Distance.
const hammingDistance = (x, y) => {
  const padLength = Math.max(x, y).toString(2).length
  const binaryX = x.toString(2)
  const binaryY = y.toString(2)
  const strX = binaryX.padStart(padLength, '0')//?
  const strY = binaryY.padStart(padLength, '0')//?
  let count = 0

  for (let i = 0; i < padLength; i += 1) {
    if (strX[i] !== strY[i]) {
      count += 1
    }
  }
  
  return count
}
