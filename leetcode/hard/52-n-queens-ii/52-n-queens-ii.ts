// leetcode/hard/52. N-Queens II
// 52-n-queens-ii
// URL: https://leetcode.com/problems/n-queens-ii/description/

function isAbleToMoveLeftTop(x: number, y: number, board: string[][]): boolean {
  let i = x - 1;
  let j = y - 1;

  while (i >= 0 && j >= 0) {
    if (board[i][j] === 'Q') {
      return false;
    }
    i -= 1;
    j -= 1;
  }

  return true;
}

function isAbleToMoveRightTop(x: number, y: number, board: string[][]): boolean {
  let i = x - 1;
  let j = y + 1;

  while (i >= 0 && j < board.length) {
    if (board[i][j] === 'Q') {
      return false;
    }
    i -= 1;
    j += 1;
  }

  return true;
}

function isAbleToMoveLeftBottom(x: number, y: number, board: string[][]): boolean {
  let i = x + 1;
  let j = y - 1;

  while (i < board.length && j >= 0) {
    if (board[i][j] === 'Q') {
      return false;
    }
    i += 1;
    j -= 1;
  }

  return true;
}

function isAbleToMoveRightBottom(x: number, y: number, board: string[][]): boolean {
  let i = x + 1;
  let j = y + 1;

  while (i < board.length && j < board.length) {
    if (board[i][j] === 'Q') {
      return false;
    }
    i += 1;
    j += 1;
  }

  return true;
}

function isAbleToMoveColumn(x: number, y: number, board: string[][]): boolean {
  for (let i = 0; i < board.length; i += 1) {
    if (board[i][y] === 'Q') {
      return false;
    }
  }

  return true;
}

function isAbleToMoveRow(x: number, y: number, board: string[][]): boolean {
  for (let i = 0; i < board.length; i += 1) {
    if (board[x][i] === 'Q') {
      return false;
    }
  }

  return true;
}

function isAbleToMove(x: number, y: number, board: string[][]): boolean {
  if (board[x].includes('Q')) {
    return false;
  }

  if (!isAbleToMoveLeftTop(x, y, board)) {
    board;
    return false;
  }

  if (!isAbleToMoveRightTop(x, y, board)) {
    return false;
  }

  if (!isAbleToMoveLeftBottom(x, y, board)) {
    return false;
  }

  if (!isAbleToMoveRightBottom(x, y, board)) {
    return false;
  }

  if (!isAbleToMoveColumn(x, y, board)) {
    return false;
  }

  if (!isAbleToMoveRow(x, y, board)) {
    return false;
  }

  return true;
}

function initBoard(n: number): string[][] {
  let board = new Array(n).fill(0).map(() => new Array(n).fill('.'));

  return board;
}

function totalNQueens(n: number): number {
  let board = initBoard(n);
  board;
  let count = 0;

  function dfs(board: string[][], row: number) {
    if (row === n) {
      count += 1;
      return;
    }

    for (let i = 0; i < n; i += 1) {
      if (isAbleToMove(row, i, board)) {
        board[row][i] = 'Q';
        dfs(board, row + 1);
        board[row][i] = '.';
      }
    }
  }

  for (let i = 0; i < n; i += 1) {
    board[0][i] = 'Q';
    dfs(board, 1);
    board[0][i] = '.';
  }

  return count;
};

let n = 4;
console.log(totalNQueens(n));
// Output: 2
