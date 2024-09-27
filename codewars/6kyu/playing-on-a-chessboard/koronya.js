// [JS][6kyu] Playing on a chessboard
// playing-on-a-chessboard
// https://www.codewars.com/kata/55ab4f980f2d576c070000f4/train/javascript

const game = (n) => (n % 2 === 0 ? [(n * n) / 2] : [n * n, 2])

game(0)
game(1)
game(8)
game(6)
game(7)
game(10)
game(9)
