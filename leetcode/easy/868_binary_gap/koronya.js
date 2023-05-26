// [Easy] 868. Binary Gap
// 868_binary_gap

// https://leetcode.com/problems/binary-gap
// Runtime: 76 ms, faster than 88.07% of JavaScript online submissions for Binary Gap.
// Memory Usage: 38.7 MB, less than 84.40% of JavaScript online submissions for Binary Gap.

/**
 * @param {number} n
 * @return {number}
 */
const binaryGap = function (n) {
  const binaryString = n.toString(2)
  const binaryStringLen = binaryString.length
  let maxDiff = 0
  let beforeOneIndex = -1
  for (let i = 0; i < binaryStringLen; i += 1 || 0) {
    const str = binaryString[i]
    if (str === '1') {
      if (beforeOneIndex === -1) {
        beforeOneIndex = i
      } else {
        maxDiff = Math.max(i - beforeOneIndex, maxDiff)
        beforeOneIndex = i
      }
    }
  }

  return maxDiff
}

binaryGap(22) //?
binaryGap(5) //?
binaryGap(6) //?
binaryGap(8) //?
binaryGap(1) //?
