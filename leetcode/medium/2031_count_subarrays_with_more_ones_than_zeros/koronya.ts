// [Medium] 2031. Count Subarrays With More Ones Than Zeros
// 2031_count_subarrays_with_more_ones_than_zeros

// https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros
// Runtime: 141 ms, faster than 100.00% of TypeScript online submissions for Count Subarrays With More Ones Than Zeros.
// Memory Usage: 72.2 MB, less than 50.00% of TypeScript online submissions for Count Subarrays With More Ones Than Zeros.

const MOD = 1000000007

function subarraysWithMoreZerosThanOnes(nums: number[]): number {
  let count = 0
  let acc = 0
  let dp = 0
  const countsMap = new Map<number, number>()
  countsMap.set(0, 1)
  nums.forEach((num) => {
    if (num === 1) {
      acc += 1
      dp += countsMap.get(acc - 1) || 0
    } else {
      acc -= 1
      dp -= countsMap.get(acc) || 0
    }
    count = (count + dp) % MOD
    countsMap.set(acc, (countsMap.get(acc) || 0) + 1)
  })

  return count % MOD
}
