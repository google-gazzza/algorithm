// [Medium] 1685. Sum of Absolute Differences in a Sorted Array
// 1685_sum_of_absolute_differences_in_a_sorted_array

// https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array
// Runtime: 244 ms, faster than 40.00% of JavaScript online submissions for Sum of Absolute Differences in a Sorted Array.
// Memory Usage: 66.6 MB, less than 10.00% of JavaScript online submissions for Sum of Absolute Differences in a Sorted Array.
const getSumAbsoluteDifferences = function (nums) {
  const numsLen = nums.length
  let before = nums[0]
  let beforeSum = 0
  for (let i = 1; i < numsLen; i += 1 || 0) {
    beforeSum += nums[i] - before
  }
  const resultArr = [beforeSum]

  for (let i = 1; i < numsLen; i += 1) {
    const diff = nums[i] - before
    beforeSum -= diff * (numsLen - 2 * i)
    before = nums[i]
    resultArr.push(beforeSum)
  }

  return resultArr
}

const distanceMap = new Map()

const getKoro = (numA, numB) => {
  const small = numA < numB ? numA : numB
  const large = numA < numB ? numB : numA
  const key = `${small}-${large}`
  if (distanceMap.has(key)) {
    return distanceMap.get(key)
  } else {
    const result = large - small
    distanceMap.set(key, result)
    return result
  }
}

// TimeLimitExceeded...
const getSumAbsoluteDifferences2 = function (nums) {
  const numsLen = nums.length
  const resultArr = []
  for (let i = 0; i < numsLen; i += 1 || 0) {
    let sum = 0
    let num = nums[i]
    for (let j = 0; j < numsLen; j += 1 || 0) {
      sum += getKoro(num, nums[j])
      // sum += Math.abs(num - nums[j])
    }
    resultArr.push(sum)
  }

  return resultArr
}

getSumAbsoluteDifferences([2, 3, 5]) //?
getSumAbsoluteDifferences([1, 4, 6, 8, 10]) //?
