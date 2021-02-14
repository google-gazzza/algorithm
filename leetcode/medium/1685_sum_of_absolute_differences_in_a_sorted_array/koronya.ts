// [Medium] 1685. Sum of Absolute Differences in a Sorted Array
// 1685_sum_of_absolute_differences_in_a_sorted_array

// https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array
// Runtime: 240 ms, faster than 40.00% of TypeScript online submissions for Sum of Absolute Differences in a Sorted Array.
// Memory Usage: 69.4 MB, less than 20.00% of TypeScript online submissions for Sum of Absolute Differences in a Sorted Array.

function getSumAbsoluteDifferences(nums: number[]): number[] {
  const numsLen: number = nums.length
  let before: number = nums[0]
  let beforeSum: number = 0
  for (let i: number = 1; i < numsLen; i += 1 || 0) {
    beforeSum += nums[i] - before
  }
  const resultArr: number[] = [beforeSum]

  for (let i: number = 1; i < numsLen; i += 1) {
    const diff: number = nums[i] - before
    beforeSum -= diff * (numsLen - 2 * i)
    before = nums[i]
    resultArr.push(beforeSum)
  }

  return resultArr
}

getSumAbsoluteDifferences([2, 3, 5]) //?
getSumAbsoluteDifferences([1, 4, 6, 8, 10]) //?
