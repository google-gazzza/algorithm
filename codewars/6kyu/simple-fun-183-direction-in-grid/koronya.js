// [JS][6kyu] Simple Fun #183: Direction In Grid
// simple-fun-183-direction-in-grid
// https://www.codewars.com/kata/58bcd7f2f6d3b11fce000025/train/javascript

const directionInGrid = (n, m) => {
  const totalLen = n * m
  let direction = 'R'
  let row = 0
  let col = 0
  const grid = Array.from({ length: n }, () => Array.from({ length: m }, () => ''))
  grid[row][col] = direction
  let count = 1
  while (count < totalLen) {
    count += 1
    if (direction === 'R') {
      if (col + 1 < m && grid[row][col + 1] === '') {
        col += 1
      } else {
        direction = 'D'
        row += 1
      }
    } else if (direction === 'D') {
      if (row + 1 < n && grid[row + 1][col] === '') {
        row += 1
      } else {
        direction = 'L'
        col -= 1
      }
    } else if (direction === 'L') {
      if (col - 1 >= 0 && grid[row][col - 1] === '') {
        col -= 1
      } else {
        direction = 'U'
        row -= 1
      }
    } else if (direction === 'U') {
      if (row - 1 >= 0 && grid[row - 1][col] === '') {
        row -= 1
      } else {
        direction = 'R'
        col += 1
      }
    }
    grid[row][col] = direction
  }
  return direction
}

// directionInGrid(1, 1) === 'R'
// directionInGrid(2, 2) === 'L'
// directionInGrid(2, 3) === 'L'
// directionInGrid(2, 4) === 'L'
// directionInGrid(3, 1) === 'D'
// directionInGrid(3, 2) === 'U'
// directionInGrid(3, 3) === 'R'
// directionInGrid(3, 4) === 'R'
// directionInGrid(3, 5) === 'R'
// directionInGrid(4, 2) === 'U'
// directionInGrid(4, 3) === 'D'
// directionInGrid(4, 4) === 'L'
// directionInGrid(4, 5) === 'L'
// directionInGrid(4, 6) === 'L'
// directionInGrid(5, 4) === 'U'
// directionInGrid(5, 5) === 'R'
// directionInGrid(5, 6) === 'R'
//   directionInGrid(100, 100) === 'L'
