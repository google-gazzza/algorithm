// [JS][7kyu] Python Checkerboard
// python-checkerboard
// https://www.codewars.com/kata/57785441311a24465e000025/train/javascript

function makeCheckeredBoard(n) {
  let line = Array(n).fill('X')
  let board = Array(n)
    .fill(line)
    .map((row) => [...row])
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if ((row + col) % 2) board[row][col] = 'O'
    }
  }
  for (let line of board) {
    console.log(line)
  }
  return board
}

makeCheckeredBoard(5)
