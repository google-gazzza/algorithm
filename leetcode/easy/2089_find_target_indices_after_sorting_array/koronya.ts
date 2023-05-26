// [Easy] 2089. Find Target Indices After Sorting Array
// 2089_find_target_indices_after_sorting_array

// https://leetcode.com/problems/find-target-indices-after-sorting-array
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Find Target Indices After Sorting Array.
// Memory Usage: 40.5 MB, less than 100.00% of TypeScript online submissions for Find Target Indices After Sorting Array.

function targetIndices(nums: number[], target: number): number[] {
  const resultArr: number[] = []
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
