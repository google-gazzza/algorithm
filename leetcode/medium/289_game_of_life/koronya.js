// [Medium] 289. Game of Life
// 289_game_of_life

// https://leetcode.com/problems/game-of-life
// Runtime: 68 ms, faster than 98.76% of JavaScript online submissions for Game of Life.
// Memory Usage: 40.5 MB, less than 9.03% of JavaScript online submissions for Game of Life.
const getNeighborsLiveCount = (board, row, col) => {
  let liveCount = 0
  const downLimit = board.length - 1
  const rightLimit = board[0].length - 1
  const invalidLeft = col === 0
  const invalidRight = col === rightLimit
  const invalidUp = row === 0
  const invalidDown = row === downLimit
  const falseResult = [false, 0]
  const getLU = () => (invalidUp || invalidLeft ? falseResult : [true, board[row - 1][col - 1]])
  const getU = () => (invalidUp ? falseResult : [true, board[row - 1][col]])
  const getRU = () => (invalidUp || invalidRight ? falseResult : [true, board[row - 1][col + 1]])
  const getR = () => (invalidRight ? falseResult : [true, board[row][col + 1]])
  const getRD = () => (invalidDown || invalidRight ? falseResult : [true, board[row + 1][col + 1]])
  const getD = () => (invalidDown ? falseResult : [true, board[row + 1][col]])
  const getLD = () => (invalidDown || invalidLeft ? falseResult : [true, board[row + 1][col - 1]])
  const getL = () => (invalidLeft ? falseResult : [true, board[row][col - 1]])
  const fncs = [getLU, getU, getRU, getR, getRD, getD, getLD, getL]
  fncs.forEach((fnc) => {
    const [isValid, value] = fnc()
    if (isValid === true) {
      if (value === 1) {
        liveCount += 1
      }
    }
  })

  return liveCount
}

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function (board) {
  const rowLen = board.length
  const colLen = board[0].length
  const resultBoard = []
  for (let row = 0; row < rowLen; row += 1 || 0) {
    let colArr = []
    for (let col = 0; col < colLen; col += 1 || 0) {
      let result = 0
      const value = board[row][col]
      const liveCount = getNeighborsLiveCount(board, row, col)
      if (value === 0 && liveCount === 3) {
        result = 1
      } else if (value === 1 && (liveCount === 2 || liveCount === 3)) {
        result = 1
      }
      colArr.push(result)
    }
    resultBoard.push(colArr)
  }
  for (let row = 0; row < rowLen; row += 1 || 0) {
    for (let col = 0; col < colLen; col += 1 || 0) {
      board[row][col] = resultBoard[row][col]
    }
  }
}
