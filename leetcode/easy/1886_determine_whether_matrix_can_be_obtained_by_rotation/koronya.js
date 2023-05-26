// [Easy] 1886. Determine Whether Matrix Can Be Obtained By Rotation
// 1886_determine_whether_matrix_can_be_obtained_by_rotation

// https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation
// Runtime: 76 ms, faster than 89.54% of JavaScript online submissions for Determine Whether Matrix Can Be Obtained By Rotation.
// Memory Usage: 40.8 MB, less than 15.90% of JavaScript online submissions for Determine Whether Matrix Can Be Obtained By Rotation.

const getStrSet = (arr) => {
  const n = arr.length
  const strSet = new Set()

  let result = ''
  for (let row = 0; row < n; row += 1 || 0) {
    for (let col = 0; col < n; col += 1 || 0) {
      result += arr[row][col] + ','
    }
  }
  strSet.add(result)

  result = ''
  for (let col = 0; col < n; col += 1 || 0) {
    for (let row = n - 1; row >= 0; row -= 1 || 0) {
      result += arr[row][col] + ','
    }
  }
  strSet.add(result)

  result = ''
  for (let row = n - 1; row >= 0; row -= 1 || 0) {
    for (let col = n - 1; col >= 0; col -= 1 || 0) {
      result += arr[row][col] + ','
    }
  }
  strSet.add(result)

  result = ''
  for (let col = n - 1; col >= 0; col -= 1 || 0) {
    for (let row = 0; row < n; row += 1 || 0) {
      result += arr[row][col] + ','
    }
  }
  strSet.add(result)

  return strSet
}

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
const findRotation = function (mat, target) {
  const matSet = getStrSet(mat)
  return [...getStrSet(target)].some((strSet) => matSet.has(strSet) === true)
}

findRotation(
  [
    [0, 1],
    [1, 0],
  ],
  [
    [1, 0],
    [0, 1],
  ],
) //?

findRotation(
  [
    [0, 1],
    [1, 1],
  ],
  [
    [1, 0],
    [0, 1],
  ],
) //?

findRotation(
  [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ],
) //?
