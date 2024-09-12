// [Easy] 999. Available Captures for Rook
// 999_available_captures_for_rook

// https://leetcode.com/problems/available-captures-for-rook
// Runtime: 56 ms, faster than 86.75% of JavaScript online submissions for Available Captures for Rook.
// Memory Usage: 32.7 MB, less than 98.55% of JavaScript online submissions for Available Captures for Rook.

/**
 * @param {character[][]} board
 * @return {number}
 */

const ROWLEN = 8
const COLLEN = 8

const getValidLeftCount = (board, row, col) => {
  const item = board[row][col]
  if (item === 'p') {
    return 1
  } else if (item === 'B' || col === 0) {
    return 0
  } else {
    return getValidLeftCount(board, row, col - 1)
  }
}
const getValidRightCount = (board, row, col) => {
  const item = board[row][col]
  if (item === 'p') {
    return 1
  } else if (item === 'B' || col === COLLEN - 1) {
    return 0
  } else {
    return getValidRightCount(board, row, col + 1)
  }
}
const getValidUpCount = (board, row, col) => {
  const item = board[row][col]
  if (item === 'p') {
    return 1
  } else if (item === 'B' || row === 0) {
    return 0
  } else {
    return getValidUpCount(board, row - 1, col)
  }
}
const getValidDownCount = (board, row, col) => {
  const item = board[row][col]
  if (item === 'p') {
    return 1
  } else if (item === 'B' || row === ROWLEN - 1) {
    return 0
  } else {
    return getValidDownCount(board, row + 1, col)
  }
}

const numRookCaptures = (board) => {
  let rookRow = -1
  let rookCol = -1
  for (let row = 0; row < ROWLEN; row = row + 1) {
    if (rookRow === -1) {
      for (let col = 0; col < COLLEN; col = col + 1) {
        if (board[row][col] === 'R') {
          rookRow = row
          rookCol = col
          break
        }
      }
    }
  }

  return getValidLeftCount(board, rookRow, rookCol) + getValidRightCount(board, rookRow, rookCol) + getValidUpCount(board, rookRow, rookCol) + getValidDownCount(board, rookRow, rookCol)
}
