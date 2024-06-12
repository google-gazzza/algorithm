// [Medium] 2031. Count Subarrays With More Ones Than Zeros
// 2031_count_subarrays_with_more_ones_than_zeros

// https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros
// Runtime: 163 ms, faster than 91.67% of JavaScript online submissions for Count Subarrays With More Ones Than Zeros.
// Memory Usage: 61.9 MB, less than 83.33% of JavaScript online submissions for Count Subarrays With More Ones Than Zeros.

const MOD = 1000000007

/**
 * @param {number[]} nums
 * @return {number}
 */
const subarraysWithMoreZerosThanOnes = function (nums) {
  let count = 0
  let acc = 0
  let dp = 0
  const countsMap = new Map()
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

// TLE...
const subarraysWithMoreZerosThanOnes2 = function (nums) {
  const adjustNums = nums.map((item) => (item === 1 ? 1 : -1))
  const numsLen = nums.length
  let count = 0
  const dfs = (index, sum) => {
    if (index >= numsLen) {
      return
    }
    if (sum > 0) {
      count += 1
    }
    if (sum < 0 && Math.abs(sum) >= numsLen - index - 1) {
      return
    }
    index += 1
    dfs(index, sum + adjustNums[index])
  }

  for (let i = 0; i < numsLen; i += 1 || 0) {
    dfs(i, adjustNums[i])
  }

  return count
}

// TLE...
const subarraysWithMoreZerosThanOnes3 = function (nums) {
  const numsLen = nums.length
  let count = 0
  const dfs = (start, sum) => {
    if (start >= numsLen) {
      return
    }
    if (sum > 0) {
      count += 1
    }
    start += 1
    const diff = nums[start] === 1 ? 1 : -1
    dfs(start, sum + diff)
  }

  for (let i = 0; i < numsLen; i += 1 || 0) {
    dfs(i, nums[i] === 1 ? 1 : -1)
  }

  return count
}

subarraysWithMoreZerosThanOnes([0, 1, 1, 0, 1])
// subarraysWithMoreZerosThanOnes([0])
// subarraysWithMoreZerosThanOnes([1])
