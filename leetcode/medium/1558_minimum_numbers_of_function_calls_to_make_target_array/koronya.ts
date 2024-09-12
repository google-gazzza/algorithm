// [Medium] 1558. Minimum Numbers of Function Calls to Make Target Array
// 1558_minimum_numbers_of_function_calls_to_make_target_array

// https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array
// Runtime: 116 ms, faster than 25.00% of TypeScript online submissions for Minimum Numbers of Function Calls to Make Target Array.
// Memory Usage: 45.9 MB, less than 25.00% of TypeScript online submissions for Minimum Numbers of Function Calls to Make Target Array.

const getCountAndRemainder = (num: number): number[] => {
  let target: number = num
  let common: number = 0
  let individual: number = 0
  while (target > 0) {
    if (target % 2 === 0) {
      target /= 2
      common += 1
    } else {
      target -= 1
      individual += 1
    }
  }
  return [common, individual]
}

function minOperations(nums: number[]): number {
  let individualSum: number = 0
  let maxCommon: number = 0
  nums.map((num) => {
    const [common, individual] = getCountAndRemainder(num)
    individualSum += individual
    maxCommon = Math.max(maxCommon, common)
  })

  return individualSum + maxCommon
}

minOperations([1, 5]) //?
minOperations([2, 2]) //?
minOperations([4, 2, 5]) //?
minOperations([3, 2, 2, 4]) //?
minOperations([2, 4, 8, 16]) //?
minOperations([100, 50]) //?
minOperations([100, 50, 50]) //?
minOperations([1000]) //?
minOperations([1000000000]) //?
