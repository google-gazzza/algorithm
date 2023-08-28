// leetcode/medium/289. Game of Life
// 289-game-of-life
// URL: https://leetcode.com/problems/game-of-life/

/**
 Do not return anything, modify board in-place instead.
 */

 function isLiveTarget(matrix: number[], currentCell: number) {
  let count = 0;

  matrix.forEach((e) => {
    if (e) {
      count += 1;
    }
  });

  if (currentCell === 0 && count === 3) {
    return true;
  }

  if (currentCell === 1 && (count === 2 || count === 3)) {
    return true;
  }
  return false;
}

function extractNeighborCells(grid: number [][], r: number, c: number) {
  let t = [];

  t.push([r - 1, c - 1]);
  t.push([r - 1, c]);
  t.push([r - 1, c + 1]);

  t.push([r, c - 1]);
  t.push([r, c + 1]);

  t.push([r + 1, c - 1]);
  t.push([r + 1, c]);
  t.push([r + 1, c + 1]);

  t = t.filter(([_r, _c]) => {
    if (_r < 0 || _c < 0) {
      return false;
    }
    if (_r > grid.length - 1 || _c > grid[0].length - 1) {
      return false;
    }
    return true;
  });

  const result = t.map(([_r, _c]) => grid[_r][_c]);

  return result;
}

function gameOfLife(board: number[][]): void {
  const result = [];
  for (let rowIndex = 0; rowIndex < board.length; rowIndex += 1) {
    result.push([]);

    for (let columnIndex = 0; columnIndex < board[0].length; columnIndex += 1) {
      const neighbors = extractNeighborCells(board, rowIndex, columnIndex);

      if (isLiveTarget(neighbors, board[rowIndex][columnIndex])) {
        result[rowIndex].push(1);
      } else {
        result[rowIndex].push(0);
      }
    }
  }

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      board[i][j] = result[i][j];
    }
  }
}
