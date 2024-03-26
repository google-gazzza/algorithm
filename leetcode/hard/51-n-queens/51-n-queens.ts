// leetcode/hard/51. N-Queens
// 51-n-queens
// URL: https://leetcode.com/problems/n-queens/description/

// Approach:
// Time Complexity:
// Space Complexity:
// Q: is there another approach?
// Q: is there a way to optimize the solution?
// Q: is there a way to optimize the space complexity?


function hasConflictLeftTopToRightBottom(matrix, rowIndex, columnIndex) {
  let rowIndexCopy1 = rowIndex;
  let columnIndexCopy1 = columnIndex;

  while (rowIndexCopy1 >= 0 && columnIndexCopy1 >= 0) {
    if (matrix[rowIndexCopy1][columnIndexCopy1] === 1) {
      return true;
    }
    rowIndexCopy1 -= 1;
    columnIndexCopy1 -= 1;
  }

  let rowIndexCopy2 = rowIndex;
  let columnIndexCopy2 = columnIndex;

  while (rowIndexCopy2 < matrix.length && columnIndexCopy2 < matrix[0].length) {
    if (matrix[rowIndexCopy2][columnIndexCopy2] === 1) {
      return true;
    }

    rowIndexCopy2 += 1;
    columnIndexCopy2 += 1;
  }

  return false;
}

function hasConflictLeftBottomToRightTop(matrix, rowIndex, columnIndex) {
  let rowIndexCopy1 = rowIndex;
  let columnIndexCopy1 = columnIndex;

  while (rowIndexCopy1 < matrix.length && columnIndexCopy1 >= 0) {
    if (matrix[rowIndexCopy1][columnIndexCopy1] === 1) {
      return true;
    }
    rowIndexCopy1 += 1;
    columnIndexCopy1 -= 1;
  }


  let rowIndexCopy2 = rowIndex;
  let columnIndexCopy2 = columnIndex;

  while (rowIndexCopy2 >= 0 && columnIndexCopy2 < matrix[0].length) {
    if (matrix[rowIndexCopy2][columnIndexCopy2] === 1) {
      return true;
    }

    rowIndexCopy2 -= 1;
    columnIndexCopy2 += 1;
  }

  return false;
}

function hasConflictRow(matrix, rowIndex) {
  return matrix[rowIndex].indexOf(1) !== -1;
}

function hasConflictColumn(matrix, columnIndex) {
  for (let i = 0; i < matrix.length; i += 1) {
    if (matrix[i][columnIndex] === 1) {
      return true;
    }
  }

  return false;
}

function hasConflict(matrix, rowIndex, columnIndex) {
  return hasConflictRow(matrix, rowIndex,)
    || hasConflictColumn(matrix, columnIndex)
    || hasConflictLeftTopToRightBottom(matrix, rowIndex, columnIndex)
    || hasConflictLeftBottomToRightTop(matrix, rowIndex, columnIndex);
}

function convertNumToChess(matrix) {
  for (let i = 0; i < matrix.length; i += 1) {
    matrix[i] = matrix[i].map((e) => {
      if (e === 0) {
        return '.';
      }
      return 'Q';
    }).join('');
  }

  return matrix;
}

function solveNQueens(n: number): string[][] {
  const result = [];

  const matrix = new Array();
  for (let i = 0; i < n; i += 1) {
    matrix.push(new Array(n).fill(0));
  }

  const backtracking = (matrix, rowIndex, n, qCount) => {
    if (rowIndex >= matrix.length) {
      return;
    }

    for (let i = 0; i < matrix[0].length; i += 1) {
      if (!hasConflict(matrix, rowIndex, i)) {
        matrix[rowIndex][i] = 1;
        qCount += 1;

        if (n === qCount) {
          const matrixCopy = [];

          matrix.forEach(element => {
            matrixCopy.push([...element]);
          });

          result.push(convertNumToChess(matrixCopy));
        } else {
          backtracking(matrix, rowIndex + 1, n, qCount);
        }

        matrix[rowIndex][i] = 0;
        qCount -= 1;
      }
    }
  };

  backtracking(matrix, 0, n, 0);

  return result;
};

let n = 4;
console.log(solveNQueens(n));

// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]
