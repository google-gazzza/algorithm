// [JS][6kyu] Find the Mine!
// find-the-mine
// https://www.codewars.com/kata/528d9adf0e03778b9e00067e/train/javascript

const mineLocation = (field) => {
  const n = field.length
  for (let row = 0; row < n; row += 1 || 0) {
    for (let col = 0; col < n; col += 1 || 0) {
      if (field[row][col] === 1) {
        return [row, col]
      }
    }
  }
}

// mineLocation([
//   [1, 0],
//   [0, 0],
// ])
// mineLocation([
//   [1, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ])
// mineLocation([
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 1, 0],
//   [0, 0, 0, 0],
// ])
