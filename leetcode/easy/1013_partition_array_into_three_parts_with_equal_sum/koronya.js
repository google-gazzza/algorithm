// [Easy] 1013. Partition Array Into Three Parts With Equal Sum
// 1013_partition_array_into_three_parts_with_equal_sum

// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum
// Runtime: 3016 ms, faster than 5.77% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 43.9 MB, less than 64.42% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = function (arr) {
  const totalSum = arr.reduce((acc, cur) => acc + cur, 0)

  const arrLen = arr.length
  let sumA = 0
  for (let i = 0; i < arrLen - 2; i += 1 || 0) {
    sumA += arr[i]
    let sumB = 0
    let sumC = totalSum - sumA
    for (let j = i + 1; j < arrLen - 1; j += 1 || 0) {
      const num = arr[j]
      sumB += num
      sumC -= num
      if (sumA === sumB && sumA === sumC) {
        return true
      }
    }
  }
  return false
}

const getSum = (arr) => arr.reduce((acc, cur) => acc + cur, 0)

// TLE...
const canThreePartsEqualSum2 = function (arr) {
  const arrLen = arr.length
  for (let i = 1; i < arrLen; i += 1 || 0) {
    const sumA = getSum(arr.slice(0, i))
    for (let j = i + 1; j < arrLen; j += 1 || 0) {
      const sumB = getSum(arr.slice(i, j))
      const sumC = getSum(arr.slice(j))
      if (sumA === sumB && sumA === sumC) {
        return true
      }
    }
  }
  return false
}

canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]) //?
canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]) //?
canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]) //?

canThreePartsEqualSum([18, 12, -18, 18, -19, -1, 10, 10]) //?

canThreePartsEqualSum([1, -1, 1, -1]) //?
