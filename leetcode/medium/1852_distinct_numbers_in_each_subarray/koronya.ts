// [Medium] 1852. Distinct Numbers in Each Subarray
// 1852_distinct_numbers_in_each_subarray

// https://leetcode.com/problems/distinct-numbers-in-each-subarray
// Runtime: 1820 ms, faster than 50.00% of TypeScript online submissions for Distinct Numbers in Each Subarray.
// Memory Usage: 74.8 MB, less than 100.00% of TypeScript online submissions for Distinct Numbers in Each Subarray.

function distinctNumbers(nums: number[], k: number): number[] {
  const limit: number = nums.length - 1
  const numMap = new Map<number, number>()
  const removeArr: number[] = []
  for (let i: number = 0; i < k; i += 1) {
    const num: number = nums[i]
    numMap.set(num, (numMap.get(num) || 0) + 1)
    removeArr.push(num)
  }

  const resultArr: number[] = [numMap.size]
  for (let i: number = k; i <= limit; i += 1) {
    const num: number = nums[i]
    const removeNum: number = removeArr.shift()!
    removeArr.push(num)
    numMap.set(num, (numMap.get(num) || 0) + 1)
    const target = numMap.get(removeNum)!
    if (target === 1) {
      numMap.delete(removeNum)
    } else {
      numMap.set(removeNum, target - 1)
    }
    resultArr.push(numMap.size)
  }

  return resultArr
}

