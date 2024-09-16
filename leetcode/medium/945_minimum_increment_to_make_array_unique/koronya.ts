// [Medium] 945. Minimum Increment to Make Array Unique
// 945_minimum_increment_to_make_array_unique

// https://leetcode.com/problems/minimum-increment-to-make-array-unique
// Runtime: 9124 ms, faster than 20.00% of TypeScript online submissions for Minimum Increment to Make Array Unique.
// Memory Usage: 50.3 MB, less than 40.00% of TypeScript online submissions for Minimum Increment to Make Array Unique.

function minIncrementForUnique(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let count: number = 0
  const numSet = new Set<number>()
  nums.forEach((num) => {
    if (numSet.has(num) === false) {
      numSet.add(num)
    } else {
      while (numSet.has(num) === true) {
        num += 1
        count += 1
      }
      numSet.add(num)
    }
  })

  return count
}

minIncrementForUnique([1, 2, 2]) //?
minIncrementForUnique([3, 2, 1, 2, 1, 7]) //?
minIncrementForUnique([3, 2, 1, 1]) //?
