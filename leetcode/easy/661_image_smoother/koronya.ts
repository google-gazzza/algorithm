// [Easy] 661. Image Smoother
// 661_image_smoother

// https://leetcode.com/problems/image-smoother
// Runtime: 184 ms, faster than 75.00% of TypeScript online submissions for Image Smoother.
// Memory Usage: 47.4 MB, less than 75.00% of TypeScript online submissions for Image Smoother.
type DirectionalTupleType = [boolean, number]
// type DirectionalFunction = () => DirectionalTupleType
interface DirectionalFunction {
  (): DirectionalTupleType;
}

const getK = (arr: number[][], row: number, col: number) => {
  let count: number = 1
  let sum: number = arr[row][col]
  const downLimit: number = arr.length - 1
  const rightLimit: number = arr[0].length - 1
  const invalidLeft: boolean = col === 0
  const invalidRight: boolean = col === rightLimit
  const invalidUp: boolean = row === 0
  const invalidDown: boolean = row === downLimit
  const falseResult: DirectionalTupleType = [false, 0]

  const getLU: DirectionalFunction = () => (invalidUp || invalidLeft ? falseResult : [true, arr[row - 1][col - 1]])
  const getU: DirectionalFunction = () => (invalidUp ? falseResult : [true, arr[row - 1][col]])
  const getRU: DirectionalFunction = () => (invalidUp || invalidRight ? falseResult : [true, arr[row - 1][col + 1]])
  const getR: DirectionalFunction = () => (invalidRight ? falseResult : [true, arr[row][col + 1]])
  const getRD: DirectionalFunction = () => (invalidDown || invalidRight ? falseResult : [true, arr[row + 1][col + 1]])
  const getD: DirectionalFunction = () => (invalidDown ? falseResult : [true, arr[row + 1][col]])
  const getLD: DirectionalFunction = () => (invalidDown || invalidLeft ? falseResult : [true, arr[row + 1][col - 1]])
  const getL: DirectionalFunction = () => (invalidLeft ? falseResult : [true, arr[row][col - 1]])
  const fncs: DirectionalFunction[] = [getLU, getU, getRU, getR, getRD, getD, getLD, getL]
  fncs.forEach((fnc: DirectionalFunction): void => {
    const [isValid, value] = fnc()
    if (isValid === true) {
      count += 1
      sum += value
    }
  })

  return Math.floor(sum / count)
}

function imageSmoother(M: number[][]): number[][] {
  return M.map((rowItem: number[], rowIndex: number): number[] => rowItem.map((_: number, colIndex: number): number => getK(M, rowIndex, colIndex)))
}

// Runtime: 184 ms, faster than 75.00% of TypeScript online submissions for Image Smoother.
// Memory Usage: 47.4 MB, less than 75.00% of TypeScript online submissions for Image Smoother.
type DirectionalDataType2 = [boolean, number]

const getK2 = (arr: number[][], row: number, col: number) => {
  let count: number = 1
  let sum: number = arr[row][col]
  const downLimit: number = arr.length - 1
  const rightLimit: number = arr[0].length - 1
  const getLU = (): DirectionalDataType2 => (row === 0 || col === 0 ? [false, 0] : [true, arr[row - 1][col - 1]])
  const getU = (): DirectionalDataType2 => (row === 0 ? [false, 0] : [true, arr[row - 1][col]])
  const getRU = (): DirectionalDataType2 => (row === 0 || col === rightLimit ? [false, 0] : [true, arr[row - 1][col + 1]])
  const getR = (): DirectionalDataType2 => (col === rightLimit ? [false, 0] : [true, arr[row][col + 1]])
  const getRD = (): DirectionalDataType2 => (row === downLimit || col === rightLimit ? [false, 0] : [true, arr[row + 1][col + 1]])
  const getD = (): DirectionalDataType2 => (row === downLimit ? [false, 0] : [true, arr[row + 1][col]])
  const getLD = (): DirectionalDataType2 => (row === downLimit || col === 0 ? [false, 0] : [true, arr[row + 1][col - 1]])
  const getL = (): DirectionalDataType2 => (col === 0 ? [false, 0] : [true, arr[row][col - 1]])
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

function imageSmoother2(M: number[][]): number[][] {
  return M.map((rowItem, rowIndex) => rowItem.map((col, colIndex) => getK2(M, rowIndex, colIndex)))
}
