// [JS][5kyu] Connect 4
// connect-4
// https://www.codewars.com/kata/586c0909c1923fdb89002031/train/javascript

const ROW_SIZE = 6
const COL_SIZE = 7

class Connect4 {
  constructor() {
    this.board = Array.from({ length: ROW_SIZE }, () => Array.from({ length: COL_SIZE }, () => 0))
    this.playerTurn = 1
    this.isFinished = false
  }

  play(col) {
    if (this.isFinished === true) {
      return 'Game has finished!'
    }
    const rowIndex = this.board.findLastIndex((row) => row[col] === 0)
    if (rowIndex === -1) {
      return 'Column full!'
    }
    this.board[rowIndex][col] = this.playerTurn
    if (this.checkWin(rowIndex, col) === true) {
      this.isFinished = true
      return `Player ${this.playerTurn} wins!`
    }
    this.playerTurn = this.playerTurn === 1 ? 2 : 1
    return `Player ${this.playerTurn === 1 ? 2 : 1} has a turn`
  }

  checkWin(row, col) {
    const player = this.board[row][col]
    const vertical = this.getVerticalArr(col)
    const horizontal = this.getHorizontalArr(row)
    const diagonal1 = this.getDiagonalArr(row, col)
    const diagonal2 = this.getDiagonalArr2(row, col)
    return (
      this.checkWinArr(vertical, player) || this.checkWinArr(horizontal, player) || this.checkWinArr(diagonal1, player) || this.checkWinArr(diagonal2, player)
    )
  }

  checkWinArr(arr, player) {
    const arrLen = arr.length
    let prev = arr[0]
    let count = 1
    for (let i = 1; i < arrLen; i += 1 || 0) {
      const cur = arr[i]
      if (cur === prev && cur === player) {
        count += 1
      } else {
        count = 1
      }
      if (count === 4) {
        return true
      }
      prev = cur
    }
    return false
  }

  getVerticalArr(col) {
    const arr = []
    for (let i = 0; i < ROW_SIZE; i += 1 || 0) {
      arr.push(this.board[i][col])
    }
    return arr
  }

  getHorizontalArr(row) {
    const arr = []
    for (let i = 0; i < COL_SIZE; i += 1 || 0) {
      arr.push(this.board[row][i])
    }
    return arr
  }

  getDiagonalArr(row, col) {
    const arr = []
    const diff = row - col
    let startRow = Math.max(row - col, 0)
    let startCol = startRow - diff
    while (startRow < ROW_SIZE && startCol < COL_SIZE) {
      arr.push(this.board[startRow][startCol])
      startRow += 1
      startCol += 1
    }
    return arr
  }

  getDiagonalArr2(row, col) {
    const arr = []
    const sum = row + col
    let startRow = Math.min(row + col, ROW_SIZE - 1)
    let startCol = sum - startRow
    while (startRow >= 0 && startCol < COL_SIZE) {
      arr.push(this.board[startRow][startCol])
      startRow -= 1
      startCol += 1
    }
    return arr
  }
}

// game = new Connect4()
// game.play(2)
// game.play(3)
// game.play(2)
// game.play(3)
// game.play(2)
// game.play(3)
// game.play(2)
// game.play(3)
// game.play(2)

// game = new Connect4()
// game.play(0)
// game.play(0)
// Test.assertEquals(game.play(0), 'Player 1 has a turn', "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(0), 'Player 2 has a turn', "Should return 'Player 2 has a turn'")

// game = new Connect4()
// game.play(0)
// game.play(1)
// game.play(0)
// game.play(1)
// game.play(0)
// game.play(1)
// game.play(0)

// game = new Connect4();
// Test.assertEquals(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(0), "Player 1 wins!", "Should return 'Player 1 wins!'")

// game = new Connect4();
// Test.assertEquals(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(4), "Column full!", "Should return 'Column full!'")

// game = new Connect4();
// Test.assertEquals(game.play(1), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(2), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(2), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(3), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
// Test.assertEquals(game.play(3), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
// Test.assertEquals(game.play(4), "Player 1 wins!", "Should return 'Player 1 wins!'")
// Test.assertEquals(game.play(4), "Game has finished!", "Should return 'Game has finished!'")

// const game = new Connect4()
// game.play(2) //
// game.play(3)
// game.play(3) //
// game.play(4)
// game.play(4) //
// game.play(1)
// game.play(4) //
// game.play(5)
// game.play(5) //
// game.play(5)
// game.play(5) //
