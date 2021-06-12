/*
79-word-search

# leetcode/medium/79. Word Search
Difficulty: medium
URL: https://leetcode.com/problems/word-search/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const search = (row, column, board, targetWord, searchedBoard, index = 0, resultRef) => {
  const newSearchBoard = JSON.parse(JSON.stringify(searchedBoard));
  if (searchedBoard[row][column]) {
    return false;
  }
  
  if (board[row][column] === targetWord[index]) {
    newSearchBoard[row][column] = true;
    index += 1;
    
    if (index >= targetWord.length) {
      resultRef.result = true;
    }
    
    if (board[row - 1]?.[column]) {
      search(row - 1, column, board, targetWord, newSearchBoard, index, resultRef);
    }
    if (board[row + 1]?.[column]) {
      search(row + 1, column, board, targetWord, newSearchBoard, index, resultRef);
    }
    if (board[row]?.[column - 1]) {
      search(row, column - 1, board, targetWord, newSearchBoard, index, resultRef);
    }
    if (board[row]?.[column + 1]) {
      search(row, column + 1, board, targetWord, newSearchBoard, index, resultRef);
    }
  }
};

const isExistAllElementsOnBoard = (board, targetWord) => {
  const copiedBoard = board.map(e => e.slice()).flat();
  
  return [...targetWord].every((e) => {
    const targetIndex = copiedBoard.indexOf(e);
    
    if (targetIndex !== -1) {
      copiedBoard.splice(targetIndex, 1);
      return true;
    }
    return false;
  });
};

const exist = function (board, targetWord) {
  if (!isExistAllElementsOnBoard(board, targetWord)) {
    return false;
  }
  
  const searchedBoard = new Array(board.length)
    .fill(false)
    .map(() => {
      return new Array(board[0].length).fill(false);
    });
  
  const resultRef = { result: false };
  
  for (let row = 0; row < board.length; row += 1) {
    for (let column = 0; column < board[0].length; column += 1) {
      if (!resultRef.result) {
        search(row, column, board, targetWord, searchedBoard, 0, resultRef);
      }
    }
  }
  
  return resultRef.result;
};


test('exist', () => {
  expect(exist([
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ],
    "ABCCED")
  ).toEqual(true);
  
  expect(exist([
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ],
    "SEE")
  ).toEqual(true);
  
  expect(exist([
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ],
    "ABCB")
  ).toEqual(false);
  
  expect(exist([
      ["A"],
    ],
    "A")
  ).toEqual(true);
  
  expect(exist([
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"],
    ],
    "AAB")
  ).toEqual(true);
});
