// [Easy] 661. Image Smoother
// 661_image_smoother

// https://leetcode.com/problems/image-smoother
// Runtime: 184 ms, faster than 75.00% of TypeScript online submissions for Image Smoother.
// Memory Usage: 47.4 MB, less than 75.00% of TypeScript online submissions for Image Smoother.
type DirectionalDataType = [boolean, number]

const getK = (arr: number[][], row: number, col: number) => {
  let count: number = 1
  let sum: number = arr[row][col]
  const downLimit: number = arr.length - 1
  const rightLimit: number = arr[0].length - 1
  const getLU = (): DirectionalDataType => (row === 0 || col === 0 ? [false, 0] : [true, arr[row - 1][col - 1]])
  const getU = (): DirectionalDataType => (row === 0 ? [false, 0] : [true, arr[row - 1][col]])
  const getRU = (): DirectionalDataType => (row === 0 || col === rightLimit ? [false, 0] : [true, arr[row - 1][col + 1]])
  const getR = (): DirectionalDataType => (col === rightLimit ? [false, 0] : [true, arr[row][col + 1]])
  const getRD = (): DirectionalDataType => (row === downLimit || col === rightLimit ? [false, 0] : [true, arr[row + 1][col + 1]])
  const getD = (): DirectionalDataType => (row === downLimit ? [false, 0] : [true, arr[row + 1][col]])
  const getLD = (): DirectionalDataType => (row === downLimit || col === 0 ? [false, 0] : [true, arr[row + 1][col - 1]])
  const getL = (): DirectionalDataType => (col === 0 ? [false, 0] : [true, arr[row][col - 1]])
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

function imageSmoother(M: number[][]): number[][] {
  return M.map((rowItem, rowIndex) => rowItem.map((col, colIndex) => getK(M, rowIndex, colIndex)))
}
