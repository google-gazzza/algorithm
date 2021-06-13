// [Easy] 1848. Minimum Distance to the Target Element
// 1848_minimum_distance_to_the_target_element

// https://leetcode.com/problems/minimum-distance-to-the-target-element
// Runtime: 80 ms, faster than 88.37% of TypeScript online submissions for Minimum Distance to the Target Element.
// Memory Usage: 40.1 MB, less than 62.79% of TypeScript online submissions for Minimum Distance to the Target Element.

function getMinDistance(nums: number[], target: number, start: number): number {
  const numsLen: number = nums.length
  const candidateArr: number[] = []
  for (let i: number = 0; i < numsLen; i += 1) {
    if (nums[i] === target) {
      candidateArr.push(i)
    }
  }
  return candidateArr.reduce((acc, cur) => {
    const diff: number = Math.abs(cur - start)
    return acc > diff ? diff : acc
  }, Number.MAX_SAFE_INTEGER)
}

// getMinDistance([1, 2, 3, 4, 5], 5, 3) //?
// getMinDistance([1], 1, 0) //?
// getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0) //?
getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 9) //?
