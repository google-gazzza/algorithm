// [Medium] 1885. Count Pairs in Two Arrays
// 1885_count_pairs_in_two_arrays

// https://leetcode.com/problems/count-pairs-in-two-arrays
// Runtime: 286 ms, faster than 55.56% of JavaScript online submissions for Count Pairs in Two Arrays.
// Memory Usage: 58.2 MB, less than 77.78% of JavaScript online submissions for Count Pairs in Two Arrays.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const countPairs = function (nums1, nums2) {
  let result = 0
  const numsLen = nums1.length
  const diffArr = nums1.map((item, index) => item - nums2[index])
  diffArr.sort((a, b) => a - b)
  let left = 0
  let right = numsLen - 1
  while (right > left) {
    if (diffArr[left] + diffArr[right] > 0) {
      result += right - left
      right -= 1
    } else {
      left += 1
    }
  }

  return result
}

const countPairs2 = function (nums1, nums2) {
  const diffArr = nums1.map((item, index) => item - nums2[index])
  const diff2Arr = nums2.map((item, index) => item - nums1[index])

  return diffArr.reduce((acc, diff, index) => acc + diff2Arr.filter((diff2, index2) => diff2 < diff && index2 > index).length, 0)
}

const countPairs3 = function (nums1, nums2) {
  const numsLen = nums1.length
  let result = 0
  const diff2Map = new Map()
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const diff = nums1[i] - nums2[i]
    for (let j = i + 1; j < numsLen; j += 1 || 0) {
      let diff2
      if (diff2Map.has(j) === true) {
        diff2 = diff2Map.get(j)
      } else {
        diff2 = nums2[j] - nums1[j]
        diff2Map.set(j, diff2)
      }
      if (diff > diff2) {
        result += 1
      }
    }
  }

  return result
}

// TLE
const countPairs4 = function (nums1, nums2) {
  const numsLen = nums1.length
  let result = 0
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const num1First = nums1[i]
    const num2First = nums2[i]
    for (let j = i + 1; j < numsLen; j += 1 || 0) {
      if (num1First + nums1[j] > num2First + nums2[j]) {
        result += 1
      }
    }
  }

  return result
}

// countPairs([2, 1, 2, 1], [1, 2, 1, 2])
countPairs([1, 10, 6, 2], [1, 4, 1, 5])
