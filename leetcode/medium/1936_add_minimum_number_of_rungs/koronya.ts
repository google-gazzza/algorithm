// [Medium] 1936. Add Minimum Number of Rungs
// 1936_add_minimum_number_of_rungs

// https://leetcode.com/problems/add-minimum-number-of-rungs
// Runtime: 7536 ms, faster than 50.00% of TypeScript online submissions for Add Minimum Number of Rungs.
// Memory Usage: 50 MB, less than 100.00% of TypeScript online submissions for Add Minimum Number of Rungs.

function addRungs(rungs: number[], dist: number): number {
  let result: number = 0
  let index: number = 0
  let previousHeight: number = 0
  let top: number = rungs[rungs.length - 1]
  while (previousHeight < top) {
    const height: number = rungs[index]
    if (height - previousHeight > dist) {
      previousHeight += dist
      result += 1
    } else {
      previousHeight = height
      index += 1
    }
  }

  return result
}

addRungs([1, 3, 5, 10], 2) //?
addRungs([3, 6, 8, 10], 3) //?
addRungs([3, 4, 6, 7], 2) //?
addRungs([5], 10) //?
