/*
36-valid-sudoku

# leetcode/medium/36. Valid Sudoku
Difficulty: medium
URL: https://leetcode.com/problems/valid-sudoku/
Tags: Top Interview Questions

## Approach

### en

### kr

## Solution
### JavaScript

*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

const isUniqArray = (inputArr) => {
  return !(inputArr.some((e, i, arr) => {
    if (e !== '.') {
      return arr.indexOf(e) !== arr.lastIndexOf(e);
    }
    return false;
  }));
};

const isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i += 1) {
    // validate row
    const isRowUnique = isUniqArray(board[i]);
    
    if (!isRowUnique) {
      return false;
    }
    
    // validate column
    const column = board.map((row) => row[i]);
    const isColumnUnique = isUniqArray(column);
    
    if (!isColumnUnique) {
      return false;
    }
    
    // validate square
    if (i % 3 === 0) {
      for (let j = 0; j < board.length; j += 1) {
        if (j % 3 === 0) {
          let sector = [];
          sector = sector.concat(board[i].slice(j, j + 3));
          sector = sector.concat(board[i + 1].slice(j, j + 3));
          sector = sector.concat(board[i + 2].slice(j, j + 3));
          
          const isSectorUnique = isUniqArray(sector);
          
          if (!isSectorUnique) {
            return false;
          }
        }
      }
    }
  }
  
  return true;
};

test('isValidSudoku', () => {
  expect(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])).toBeTruthy();
  
  expect(isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])).toBeFalsy();
  
  expect(isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ])).toBeFalsy();
});
