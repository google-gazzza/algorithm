/*
419-battleships-in-a-board
leetcode/medium/419. Battleships in a Board
URL: https://leetcode.com/problems/battleships-in-a-board/

NOTE: Description
NOTE: Constraints
  - m == board.length
  - n == board[i].length
  - 1 <= m, n <= 200
  - board[i][j] is either '.' or 'X'.

NOTE: Explanation
NOTE: Reference
*/

function eraseShipOnTheBoard(board: string[][], rowIndex, columnIndex) {
  if (board[rowIndex][columnIndex] !== 'X') {
    return;
  }

  board[rowIndex][columnIndex] = '.';

  if (rowIndex > 0) {
    eraseShipOnTheBoard(board, rowIndex - 1, columnIndex);
  }
  if (rowIndex < board.length - 1) {
    eraseShipOnTheBoard(board, rowIndex + 1, columnIndex);
  }
  if (columnIndex > 0) {
    eraseShipOnTheBoard(board, rowIndex, columnIndex - 1);
  }
  if (columnIndex < board[0].length - 1) {
    eraseShipOnTheBoard(board, rowIndex, columnIndex + 1);
  }
}

function countBattleships(board: string[][]): number {
  let count = 0;

  board.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column === 'X') {
        count += 1;
        eraseShipOnTheBoard(board, rowIndex, columnIndex);
      }
    });
  });

  return count;
}

let board = [['X', '.', '.', 'X'], ['.', '.', '.', 'X'], ['.', '.', '.', 'X']];
console.log(countBattleships(board));
// Output: 2

board = [['.']];
console.log(countBattleships(board));
// Output: 