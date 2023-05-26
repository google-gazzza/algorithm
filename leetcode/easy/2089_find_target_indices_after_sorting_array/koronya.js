// [Easy] 2089. Find Target Indices After Sorting Array
// 2089_find_target_indices_after_sorting_array

// https://leetcode.com/problems/find-target-indices-after-sorting-array
// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Find Target Indices After Sorting Array.
// Memory Usage: 40.2 MB, less than 100.00% of JavaScript online submissions for Find Target Indices After Sorting Array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = function (nums, target) {
  const resultArr = []
  nums.sort((a, b) => a - b)
  nums.forEach((num, index) => {
    if (num === target) {
      resultArr.push(index)
    }
  })

  return resultArr
}

targetIndices([1, 2, 5, 2, 3], 2) //?
targetIndices([1, 2, 5, 2, 3], 3) //?
targetIndices([1, 2, 5, 2, 3], 5) //?
targetIndices([1, 2, 5, 2, 3], 4) //?
