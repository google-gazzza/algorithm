// [Easy] 643. Maximum Average Subarray I
// 643_maximum_average_subarray_i

// https://leetcode.com/problems/maximum-average-subarray-i
// Runtime: 160 ms, faster than 16.67% of TypeScript online submissions for Maximum Average Subarray I.
// Memory Usage: 51.4 MB, less than 16.67% of TypeScript online submissions for Maximum Average Subarray I.

function findMaxAverage(nums: number[], k: number): number {
  let sum: number = 0
  const sumArr: number[] = []
  let i: number = 0
  while (i < k) {
    const num: number = nums[i]
    sumArr.push(num)
    sum += num
    i += 1
  }
  let max: number = sum
  const numsLen: number = nums.length
  for (let i = k; i < numsLen; i += 1) {
    sum -= sumArr.shift()!
    const num: number = nums[i]
    sum += num
    sumArr.push(num)
    max = Math.max(max, sum)
  }

  return max / k
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4) //?
