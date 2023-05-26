// [Easy] 303. Range Sum Query - Immutable
// 303_range_sum_query_-_immutable

// https://leetcode.com/problems/range-sum-query-immutable
// Runtime: 180 ms, faster than 35.00% of TypeScript online submissions for Range Sum Query - Immutable.
// Memory Usage: 46.3 MB, less than 62.50% of TypeScript online submissions for Range Sum Query - Immutable.

class NumArray {
  arr: number[]
  constructor(nums: number[]) {
    this.arr = nums
  }

  sumRange(i: number, j: number): number {
    let sum: number = 0
    const arr: number[] = this.arr
    for (let index: number = i; index <= j; index += 1) {
      sum += arr[index]
    }

    return sum
  }
}

const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
numArray.sumRange(0, 2) //?
numArray.sumRange(2, 5) //?
numArray.sumRange(0, 5) //?
