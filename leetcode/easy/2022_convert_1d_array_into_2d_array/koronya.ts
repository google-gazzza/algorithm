// [Easy] 2022. Convert 1D Array Into 2D Array
// 2022_convert_1d_array_into_2d_array

// https://leetcode.com/problems/convert-1d-array-into-2d-array
// Runtime: 392 ms, faster than 46.00% of TypeScript online submissions for Convert 1D Array Into 2D Array.
// Memory Usage: 77.8 MB, less than 8.00% of TypeScript online submissions for Convert 1D Array Into 2D Array.

function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (original.length !== m * n) {
    return []
  }
  const resultArr: number[][] = []
  let index: number = 0
  for (let i: number = 0; i < m; i += 1) {
    const arr: number[] = []
    for (let j: number = 0; j < n; j += 1) {
      arr.push(original[index])
      index += 1
    }
    resultArr.push(arr)
  }

  return resultArr
}
