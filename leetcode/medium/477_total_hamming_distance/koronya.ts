// [Medium] 477. Total Hamming Distance
// 477_total_hamming_distance

// https://leetcode.com/problems/total-hamming-distance
// Runtime: 140 ms, faster than 33.33% of TypeScript online submissions for Total Hamming Distance.
// Memory Usage: 42.7 MB, less than 83.33% of TypeScript online submissions for Total Hamming Distance.

function totalHammingDistance(nums: number[]): number {
  let numsLen: number = nums.length
  let res: number = 0
  for (let i: number = 0; i < 32; i += 1) {
    let oneCount: number = 0
    nums.forEach((num) => {
      if (num & (1 << i)) {
        oneCount += 1
      }
    })
    const zeroCount: number = numsLen - oneCount
    res += zeroCount * oneCount
  }
  return res
}
