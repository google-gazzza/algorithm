// [Easy] 661. Image Smoother
// 661_image_smoother

// https://leetcode.com/problems/image-smoother
// Runtime: 196 ms, faster than 15.91% of JavaScript online submissions for Image Smoother.
// Memory Usage: 47.4 MB, less than 9.09% of JavaScript online submissions for Image Smoother.
const getK = (arr, row, col) => {
  let count = 1
  let sum = arr[row][col]
  const downLimit = arr.length - 1
  const rightLimit = arr[0].length - 1
  const getLU = () => (row === 0 || col === 0 ? [false, 0] : [true, arr[row - 1][col - 1]])
  const getU = () => (row === 0 ? [false, 0] : [true, arr[row - 1][col]])
  const getRU = () => (row === 0 || col === rightLimit ? [false, 0] : [true, arr[row - 1][col + 1]])
  const getR = () => (col === rightLimit ? [false, 0] : [true, arr[row][col + 1]])
  const getRD = () => (row === downLimit || col === rightLimit ? [false, 0] : [true, arr[row + 1][col + 1]])
  const getD = () => (row === downLimit ? [false, 0] : [true, arr[row + 1][col]])
  const getLD = () => (row === downLimit || col === 0 ? [false, 0] : [true, arr[row + 1][col - 1]])
  const getL = () => (col === 0 ? [false, 0] : [true, arr[row][col - 1]])
  const fncs = [getLU, getU, getRU, getR, getRD, getD, getLD, getL]
  fncs.forEach((fnc) => {
    const [isValid, value] = fnc()
    if (isValid === true) {
      count += 1
      sum += value
    }
  })

  return Math.floor(sum / count)
}

const imageSmoother = function (M) {
  return M.map((rowItem, rowIndex) => rowItem.map((col, colIndex) => getK(M, rowIndex, colIndex)))
}
