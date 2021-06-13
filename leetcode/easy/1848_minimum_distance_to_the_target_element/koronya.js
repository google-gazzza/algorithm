// [Easy] 1848. Minimum Distance to the Target Element
// 1848_minimum_distance_to_the_target_element

// https://leetcode.com/problems/minimum-distance-to-the-target-element
// Runtime: 80 ms, faster than 69.71% of JavaScript online submissions for Minimum Distance to the Target Element.
// Memory Usage: 39.2 MB, less than 11.06% of JavaScript online submissions for Minimum Distance to the Target Element.

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
const getMinDistance = function (nums, target, start) {
  const numsLen = nums.length
  const candidateArr = []
  for (let i = 0; i < numsLen; i += 1 || 0) {
    if (nums[i] === target) {
      candidateArr.push(i)
    }
  }
  return candidateArr.reduce((acc, cur) => {
    const diff = Math.abs(cur - start)
    return acc > diff ? diff : acc
  }, Number.MAX_SAFE_INTEGER)
}

// getMinDistance([1, 2, 3, 4, 5], 5, 3) //?
// getMinDistance([1], 1, 0) //?
// getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0) //?
getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 9) //?
