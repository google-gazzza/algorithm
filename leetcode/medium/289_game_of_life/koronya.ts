// [Medium] 289. Game of Life
// 289_game_of_life

// https://leetcode.com/problems/game-of-life
// Runtime: 84 ms, faster than 62.22% of TypeScript online submissions for Game of Life.
// Memory Usage: 40.1 MB, less than 35.56% of TypeScript online submissions for Game of Life.

type DirectionalTupleType = [boolean, number]
type DirectionalFunction = () => DirectionalTupleType

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const getNeighborsLiveCount = (board: number[][], row: number, col: number) => {
  let liveCount: number = 0
  const downLimit: number = board.length - 1
  const rightLimit: number = board[0].length - 1
  const invalidLeft: boolean = col === 0
  const invalidRight: boolean = col === rightLimit
  const invalidUp: boolean = row === 0
  const invalidDown: boolean = row === downLimit
  const falseResult: DirectionalTupleType = [false, 0]
  const getLU: DirectionalFunction = () => (invalidUp || invalidLeft ? falseResult : [true, board[row - 1][col - 1]])
  const getU: DirectionalFunction = () => (invalidUp ? falseResult : [true, board[row - 1][col]])
  const getRU: DirectionalFunction = () => (invalidUp || invalidRight ? falseResult : [true, board[row - 1][col + 1]])
  const getR: DirectionalFunction = () => (invalidRight ? falseResult : [true, board[row][col + 1]])
  const getRD: DirectionalFunction = () => (invalidDown || invalidRight ? falseResult : [true, board[row + 1][col + 1]])
  const getD: DirectionalFunction = () => (invalidDown ? falseResult : [true, board[row + 1][col]])
  const getLD: DirectionalFunction = () => (invalidDown || invalidLeft ? falseResult : [true, board[row + 1][col - 1]])
  const getL: DirectionalFunction = () => (invalidLeft ? falseResult : [true, board[row][col - 1]])
  const fncs: DirectionalFunction[] = [getLU, getU, getRU, getR, getRD, getD, getLD, getL]
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

function gameOfLife(board: number[][]): void {
  const rowLen: number = board.length
  const colLen: number = board[0].length
  const resultBoard: number[][] = []
  for (let row: number = 0; row < rowLen; row += 1) {
    let colArr: number[] = []
    for (let col: number = 0; col < colLen; col += 1) {
      let result = 0
      const value: number = board[row][col]
      const liveCount: number = getNeighborsLiveCount(board, row, col)
      if (value === 0 && liveCount === 3) {
        result = 1
      } else if (value === 1 && (liveCount === 2 || liveCount === 3)) {
        result = 1
      }
      colArr.push(result)
    }
    resultBoard.push(colArr)
  }
  for (let row: number = 0; row < rowLen; row += 1) {
    for (let col: number = 0; col < colLen; col += 1) {
      board[row][col] = resultBoard[row][col]
    }
  }
}
