// [Medium] 1936. Add Minimum Number of Rungs
// 1936_add_minimum_number_of_rungs

// https://leetcode.com/problems/add-minimum-number-of-rungs
// Runtime: 7592 ms, faster than 6.67% of JavaScript online submissions for Add Minimum Number of Rungs.
// Memory Usage: 49.1 MB, less than 43.33% of JavaScript online submissions for Add Minimum Number of Rungs.

/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
const addRungs = function (rungs, dist) {
  let result = 0
  let index = 0
  let previousHeight = 0
  let top = rungs[rungs.length - 1]
  while (previousHeight < top) {
    const height = rungs[index]
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
