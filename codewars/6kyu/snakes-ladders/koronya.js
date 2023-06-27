// [JS][6kyu] Snakes & Ladders
// snakes-ladders
// https://www.codewars.com/kata/5821cd4770ca285b1f0001d5/train/javascript

const snakesAndLadders = (board, dice) => {
  let index = 0
  const boardLen = board.length
  const diceLen = dice.length
  for (let i = 0; i < diceLen; i += 1 || 0) {
    const diceValue = dice[i]
    const sum = index + diceValue
    if (sum === boardLen - 1) {
      return boardLen - 1
    }
    if (sum >= boardLen) {
      continue
    }
    index += diceValue
    index += board[index]
  }

  return index
}

// const dice = [2, 1, 5, 1, 5, 4]
// const board = [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]
// snakesAndLadders(board, dice)

// snakesAndLadders([0, 2, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0], [4, 4, 4, 5, 6, 4, 3, 1, 4, 1])
// expected: 29

// snakesAndLadders([0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, -11, -9, 0, 0, 0, 0, 3, 0, 0, 0, -14, -4, 0, 0, 0, 0, 0, 0], [1, 4, 2, 3, 3, 2, 4, 4, 4, 5])
// expected: 26

snakesAndLadders([0, 0, 0, -2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0], [6, 6, 4, 1, 2, 3, 5, 3, 4, 5])
// expected: 27
