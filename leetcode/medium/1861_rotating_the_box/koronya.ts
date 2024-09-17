// [Medium] 1861. Rotating the Box
// 1861_rotating_the_box

// https://leetcode.com/problems/rotating-the-box
// Runtime: 448 ms, faster than 25.00% of TypeScript online submissions for Rotating the Box.
// Memory Usage: 70.6 MB, less than 25.00% of TypeScript online submissions for Rotating the Box.

function rotateTheBox(box: string[][]): string[][] {
  const rowLen: number = box.length
  const colLen: number = box[0].length
  const resultBox: string[][] = Array.from({ length: colLen }).map(() => Array.from({ length: rowLen }).map(() => '.'))
  box.forEach((col, rowIndex) =>
    col.forEach((item, colIndex) => {
      if (item === '*') {
        resultBox[colIndex][rowLen - 1 - rowIndex] = '*'
      }
    }),
  )

  const setBox = (row: number, col: number) => {
    let targetRow = row
    while (targetRow < colLen - 1) {
      const nextTarget = resultBox[targetRow + 1][col]
      if (nextTarget === '.') {
        targetRow += 1
      } else {
        resultBox[targetRow][col] = '#'
        return
      }
    }
    resultBox[targetRow][col] = '#'
  }

  for (let i: number = rowLen - 1; i >= 0; i -= 1) {
    for (let j: number = colLen - 1; j >= 0; j -= 1) {
      const item = box[i][j]
      if (item === '#') {
        setBox(j, rowLen - 1 - i)
      }
    }
  }

  return resultBox
}
