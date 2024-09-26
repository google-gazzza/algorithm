// [Easy] 566. Reshape the Matrix
// 566_reshape_the_matrix

// https://leetcode.com/problems/reshape-the-matrix
// Runtime: 92 ms, faster than 96.99% of JavaScript online submissions for Reshape the Matrix.
// Memory Usage: 44.7 MB, less than 7.52% of JavaScript online submissions for Reshape the Matrix.
const matrixReshape = (nums, r, c) => {
  const rowLen = nums.length
  const colLen = nums[0].length
  const totalLen = rowLen * colLen
  if (totalLen !== r * c) {
    return nums
  }

  const numStack = []
  for (let row = 0; row < rowLen; row = row + 1 | 0) {
    for (let col = 0; col < colLen; col = col + 1 | 0) {
      numStack.push(nums[row][col])
    }
  }

  const resultArr = []
  for (let row = 0; row < r; row = row + 1 | 0) {
    const colArr = []
    for (let col = 0; col < c; col = col + 1 | 0) {
      colArr.push(numStack.shift())
    }
    resultArr.push(colArr)
  }

  return resultArr
}
