// [Medium] 1861. Rotating the Box
// 1861_rotating_the_box

// https://leetcode.com/problems/rotating-the-box
// Runtime: 659 ms, faster than 11.39% of JavaScript online submissions for Rotating the Box.
// Memory Usage: 87.9 MB, less than 22.15% of JavaScript online submissions for Rotating the Box.

/**
 * @param {character[][]} box
 * @return {character[][]}
 */
const rotateTheBox = function (box) {
  const rowLen = box.length
  const colLen = box[0].length
  const resultBox = Array.from({ length: colLen }).map(() => Array.from({ length: rowLen }).map(() => '.'))
  box.forEach((col, rowIndex) =>
    col.forEach((item, colIndex) => {
      if (item === '*') {
        resultBox[colIndex][rowLen - 1 - rowIndex] = '*'
      }
    }),
  )

  const setBox = (row, col) => {
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

  for (let i = rowLen - 1; i >= 0; i -= 1 || 0) {
    for (let j = colLen - 1; j >= 0; j -= 1 || 0) {
      const item = box[i][j]
      if (item === '#') {
        setBox(j, rowLen - 1 - i)
      }
    }
  }

  return resultBox
}

// rotateTheBox([['#', '.', '#']]) //?
// rotateTheBox([
//   ['#', '.', '*', '.'],
//   ['#', '#', '*', '.'],
// ]) //?
rotateTheBox([
  ['#', '#', '*', '.', '*', '.'],
  ['#', '#', '#', '*', '.', '.'],
  ['#', '#', '#', '.', '#', '.'],
]) //?
