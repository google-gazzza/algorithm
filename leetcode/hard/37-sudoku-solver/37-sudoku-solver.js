/*
37-sudoku-solver

# leetcode/hard/37. Sudoku Solver
Difficulty: hard
URL: https://leetcode.com/problems/sudoku-solver
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const findTargetCoordinate = (board) => {
  for (let row = 0; row < 9; row += 1) {
    for (let column = 0; column < 9; column += 1) {
      if (board[row][column] === '.') {
        return [row, column];
      }
    }
  }
  return [null, null];
};

const validRow = (board, row, value) => {
  for (let columnIndex = 0; columnIndex < board[row].length; columnIndex += 1) {
    if (board[row][columnIndex] === value) {
      return false;
    }
  }
  
  return true;
};

const validColumn = (board, column, value) => {
  for (let rowIndex = 0; rowIndex < board.length; rowIndex += 1) {
    if (board[rowIndex][column] === value) {
      return false;
    }
  }
  return true;
};

const calculateSectorBeginIndex = (index) => Math.floor(index / 3) * 3;

const validSector = (board, row, column, value) => {
  const sectorRowBeginIndex = calculateSectorBeginIndex(row);
  const sectorColumnBeginIndex = calculateSectorBeginIndex(column);
  
  return !board.slice(sectorRowBeginIndex, sectorRowBeginIndex + 3)
    .map((row) => {
      return row.slice(sectorColumnBeginIndex, sectorColumnBeginIndex + 3);
    }).flat()
    .includes(value);
};

const checkValue = (board, row, column, value) => {
  const validResults = [
    validRow(board, row, value),
    validColumn(board, column, value),
    validSector(board, row, column, value)
  ];
  
  return validResults.every((e) => e === true);
};

const solveSudoku = (board) => {
  const [targetRow, targetColumn] = findTargetCoordinate(board);
  
  /*
  targetRow -1 means there are nothing left 0
  which means there are nothing left for calculate.
  in other words we solved.
   */
  if (targetRow === null) {
    return;
  }
  
  for (let candidateNumber = 1; candidateNumber < 10; candidateNumber += 1) {
    if (checkValue(board, targetRow, targetColumn, String(candidateNumber))) {
      board[targetRow][targetColumn] = String(candidateNumber);
      
      solveSudoku(board);
    }
  }
  
  /*
  when reached dead end then reset to '.' for re-calculate
  because it's back tracking and all recursive call keeping targetRow and targetColumn
   */
  if (findTargetCoordinate(board)[0] !== null) {
    board[targetRow][targetColumn] = '.';
  }
  
  // it's for final result.
  // of course when reached dead end also will return this but there are no assigning logic
  // so it will effect at end
  // return convertToString(board);
};


test('solveSudoku', () => {
  const inputBoard = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ];
  const expectOutput = [
    ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
    ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
    ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
    ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
    ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
    ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
    ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
    ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
    ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
  ];
  
  solveSudoku(inputBoard);
  
  expect(inputBoard).toEqual(expectOutput);
});
