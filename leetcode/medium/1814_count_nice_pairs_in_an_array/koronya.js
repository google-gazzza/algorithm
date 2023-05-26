// [Medium] 1814. Count Nice Pairs in an Array
// 1814_count_nice_pairs_in_an_array

// https://leetcode.com/problems/count-nice-pairs-in-an-array
// Runtime: 244 ms, faster than 52.17% of JavaScript online submissions for Count Nice Pairs in an Array.
// Memory Usage: 58.8 MB, less than 56.52% of JavaScript online submissions for Count Nice Pairs in an Array.

const getRev = (num) => Number(String(num).split('').reverse().join(''))

/**
 * @param {number[]} nums
 * @return {number}
 */
const countNicePairs = function (nums) {
  const matchedMap = new Map()
  let count = 0
  nums.forEach((num) => {
    let diff = num - getRev(num)
    let matchedCount = matchedMap.get(diff) || 0
    count += matchedCount
    matchedMap.set(diff, matchedCount + 1)
  })

  return count % (10 ** 9 + 7)
}

// TLE...
const countNicePairs3 = function (nums) {
  const numsLen = nums.length
  let count = 0
  nums.forEach((num, index) => {
    const numA = num
    const reverseNumA = getRev(numA)
    for (let i = index + 1; i < numsLen; i += 1 || 0) {
      const numB = nums[i]
      if (matchedMap.get(numA) === numB) {
        count += 1
      } else {
        const reverseNumB = getRev(numB)
        if (numA + reverseNumB === numB + reverseNumA) {
          count += 1
          matchedMap.set(numA, numB)
        }
      }
    }
  })
  return count % (10 ** 9 + 7)
}

// TLE...
const countNicePairs2 = function (nums) {
  const numsLen = nums.length
  const revNums = nums.map((num) => getRev(num))
  let count = 0
  nums.forEach((num, index) => {
    const numA = num
    const reverseNumA = revNums[index]
    for (let i = index + 1; i < numsLen; i += 1 || 0) {
      const numB = nums[i]
      const reverseNumB = revNums[i]
      if (matchedMap.get(numA) === numB) {
        count += 1
      } else {
        if (numA + reverseNumB === numB + reverseNumA) {
          count += 1
          matchedMap.set(numA, numB)
        }
      }
    }
  })
  return count % (10 ** 9 + 7)
}

// countNicePairs([42, 11, 1, 97]) //?
// countNicePairs([13, 10, 35, 24, 76]) //?
// countNicePairs([1, 1, 1, 1, 10, 10, 10, 10]) //?
countNicePairs([1, 10]) //?

// countNicePairs2([42, 11, 1, 97]) //?
// countNicePairs2([13, 10, 35, 24, 76]) //?
// countNicePairs2([1, 1, 1, 1, 10, 10, 10, 10]) //?
// countNicePairs2([1, 10]) //?
