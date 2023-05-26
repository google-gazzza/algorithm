// [Easy] 2022. Convert 1D Array Into 2D Array
// 2022_convert_1d_array_into_2d_array

// https://leetcode.com/problems/convert-1d-array-into-2d-array
// Runtime: 244 ms, faster than 73.39% of JavaScript online submissions for Convert 1D Array Into 2D Array.
// Memory Usage: 61.7 MB, less than 67.58% of JavaScript online submissions for Convert 1D Array Into 2D Array.

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
const construct2DArray = function (original, m, n) {
  if (original.length !== m * n) {
    return []
  }
  const resultArr = []
  let index = 0
  for (let i = 0; i < m; i += 1 || 0) {
    const arr = []
    for (let j = 0; j < n; j += 1 || 0) {
      arr.push(original[index])
      index += 1
    }
    resultArr.push(arr)
  }

  return resultArr
}

construct2DArray([1, 2, 3, 4], 2, 2)
construct2DArray([1, 2, 3], 1, 3)
construct2DArray([1, 2], 1, 1)
