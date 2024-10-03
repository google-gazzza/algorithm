// [JS][7kyu] Latin Squares
// latin-squares
// https://www.codewars.com/kata/645fb55ecf8c290031b779ef/train/javascript

const makeLatinSquare = (n) => {
  const result = Array.from(Array(n), () => Array(n).fill(0))
  for (let row = 0; row < n; row += 1 || 0) {
    for (let col = 0; col < n; col += 1 || 0) {
      result[row][col] = ((row + col) % n) + 1
    }
  }

  return result
}

// makeLatinSquare(2)
// makeLatinSquare(3)
// makeLatinSquare(4)
// makeLatinSquare(5)
