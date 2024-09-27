// [Easy] 1619. Mean of Array After Removing Some Elements
// 1619_mean_of_array_after_removing_some_elements

// https://leetcode.com/problems/mean-of-array-after-removing-some-elements
// Runtime: 80 ms, faster than 87.33% of JavaScript online submissions for Mean of Array After Removing Some Elements.
// Memory Usage: 39.3 MB, less than 71.92% of JavaScript online submissions for Mean of Array After Removing Some Elements.
const trimMean = function (arr) {
  const removeCount = arr.length / 20
  arr.sort((a, b) => a - b)
  for (let i = 0; i < removeCount; i += 1 || 0) {
    arr.shift()
    arr.pop()
  }

  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}
