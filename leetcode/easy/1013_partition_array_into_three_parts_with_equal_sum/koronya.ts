// [Easy] 1013. Partition Array Into Three Parts With Equal Sum
// 1013_partition_array_into_three_parts_with_equal_sum

// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum
// Runtime: 2916 ms, faster than 10.00% of TypeScript online submissions for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 44.7 MB, less than 90.00% of TypeScript online submissions for Partition Array Into Three Parts With Equal Sum.

function canThreePartsEqualSum(arr: number[]): boolean {
  const totalSum = arr.reduce((acc, cur) => acc + cur, 0)
  const arrLen = arr.length
  let sumA: number = 0
  for (let i: number = 0; i < arrLen - 2; i += 1) {
    sumA += arr[i]
    let sumB: number = 0
    let sumC = totalSum - sumA
    for (let j: number = i + 1; j < arrLen - 1; j += 1) {
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

canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]) //?
canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]) //?
canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]) //?

canThreePartsEqualSum([18, 12, -18, 18, -19, -1, 10, 10]) //?

canThreePartsEqualSum([1, -1, 1, -1]) //?
