// ㅡ
// 15_3sum

// https://leetcode.com/problems/3sum
// Runtime: 520 ms, faster than 34.72% of TypeScript online submissions for 3Sum.
// Memory Usage: 51.3 MB, less than 41.32% of TypeScript online submissions for 3Sum.

function threeSum(nums: number[]): number[][] {
  const numsLen = nums.length
  const resultSet = new Set<string>()
  const resultArr: [number, number, number][] = []
  nums.sort((a, b) => a - b)
  for (let right: number = numsLen - 1; right > 1; right -= 1) {
    let left = 0
    let mid = right - 1
    while (left < mid) {
      const numA = nums[left]
      const numB = nums[mid]
      const numC = nums[right]
      let sum = numA + numB + numC
      if (sum === 0) {
        const str = `${numA}-${numB}-${numC}`
        if (resultSet.has(str) === false) {
          resultSet.add(str)
          resultArr.push([numA, numB, numC])
        }
      }
      if (sum >= 0) {
        mid -= 1
      } else {
        left += 1
      }
    }
  }
  return resultArr
}

threeSum([-1, 0, 1, 2, -1, -4]) //?
threeSum([]) //?
threeSum([0]) //?

threeSum([0, 0, 0, 0]) //?
