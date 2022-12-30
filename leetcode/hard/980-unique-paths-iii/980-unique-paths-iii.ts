/*
980-unique-paths-iii
leetcode/hard/980. Unique Paths III
URL: https://leetcode.com/problems/unique-paths-iii/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function findStartPointCoordinate(grid: number[][]): [number, number] {
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 1) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

function countNonObstacle(grid: number[][]): number {
  let count = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 0) {
        count += 1;
      }
    }
  }

  return count;
}

function uniquePathsIII(grid: number[][]): number {
  const targetObstacleCount = countNonObstacle(grid);
  const visitedGrid = grid.map((row) => row.map((col) => false));

  let resultCount = 0;

  function dfs(
    _grid: number[][],
    _visitedGrid: boolean[][],
    _stepCount: number,
    _targetObstacleCount: number,
    x: number,
    y: number,
  ) {
    if (_stepCount > _targetObstacleCount + 1) {
      return;
    }

    if (_stepCount - 1 === _targetObstacleCount && _grid[x]?.[y] === 2) {
      resultCount += 1;
      return;
    }

    [[0, 1], [0, -1], [1, 0], [-1, 0]].forEach(([dx, dy]) => {
      const copiedVisitedGrid = _visitedGrid.map((row) => row.slice());

      if (copiedVisitedGrid[x + dx]?.[y + dy] === undefined || copiedVisitedGrid[x + dx][y + dy] === true) {
        return;
      }

      if ([-1, 1].includes(_grid[x + dx][y + dy])) {
        return;
      }

      copiedVisitedGrid[x + dx][y + dy] = true;

      dfs(
        _grid,
        copiedVisitedGrid,
        _stepCount + 1,
        targetObstacleCount,
        x + dx,
        y + dy,
      );
    });
  }

  const startCoordinate = findStartPointCoordinate(grid);

  dfs(grid, visitedGrid, 0, targetObstacleCount, startCoordinate[0], startCoordinate[1]);

  return resultCount;
}

let grid = [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, -1]];
// console.log(uniquePathsIII(grid));
//?
// Output: 2

grid = [[0, 0, 0, 0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]];
console.log(uniquePathsIII(grid));
