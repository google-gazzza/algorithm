// [Easy] 868. Binary Gap
// 868_binary_gap

// https://leetcode.com/problems/binary-gap
// Runtime: 92 ms, faster than 100.00% of TypeScript online submissions for Binary Gap.
// Memory Usage: 40.2 MB, less than 100.00% of TypeScript online submissions for Binary Gap.

/**
 * @param {number} n
 * @return {number}
 */
function binaryGap(n: number): number {
  const binaryString: string = n.toString(2)
  const binaryStringLen: number = binaryString.length
  let maxDiff: number = 0
  let beforeOneIndex: number = -1
  for (let i: number = 0; i < binaryStringLen; i += 1) {
    const str: string = binaryString[i]
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
