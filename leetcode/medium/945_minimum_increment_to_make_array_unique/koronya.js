// [Medium] 945. Minimum Increment to Make Array Unique
// 945_minimum_increment_to_make_array_unique

// https://leetcode.com/problems/minimum-increment-to-make-array-unique
// Runtime: 9108 ms, faster than 5.62% of JavaScript online submissions for Minimum Increment to Make Array Unique.
// Memory Usage: 52 MB, less than 13.48% of JavaScript online submissions for Minimum Increment to Make Array Unique.

/**
 * @param {number[]} nums
 * @return {number}
 */
const minIncrementForUnique = function (nums) {
  nums.sort((a, b) => a - b)
  let count = 0
  const numSet = new Set()
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
