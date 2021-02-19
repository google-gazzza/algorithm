// [Easy] 303. Range Sum Query - Immutable
// 303_range_sum_query_-_immutable

// https://leetcode.com/problems/range-sum-query-immutable
// Runtime: 164 ms, faster than 51.78% of JavaScript online submissions for Range Sum Query - Immutable.
// Memory Usage: 45.7 MB, less than 48.22% of JavaScript online submissions for Range Sum Query - Immutable.

/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
  this.arr = nums
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  let sum = 0
  const arr = this.arr
  for (let index = i; index <= j; index += 1 || 0) {
    sum += arr[index]
  }

  return sum
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
numArray.sumRange(0, 2) //?
numArray.sumRange(2, 5) //?
numArray.sumRange(0, 5) //?
