/*
1992-find-all-groups-of-farmland
leetcode/medium/1992. Find All Groups of Farmland
URL: https://leetcode.com/problems/find-all-groups-of-farmland/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function removeLand(land: number[][], farmLand: number[]) {
  const [startX, startY, endX, endY] = farmLand;

  for (let row = startX; row <= endX; row += 1) {
    for (let col = startY; col <= endY; col += 1) {
      land[row][col] = 0;
    }
  }
}

function findEndOfLand(land: number[][], x: number, y: number): number[] {
  while (land[x][y] === 1) {
    if (land[x]?.[y + 1] === 1) {
      y += 1;
    } else if (land[x + 1]?.[y] === 1) {
      x += 1;
    } else {
      break;
    }
  }

  return [x, y];
}

function findFarmland(land: number[][]): number[][] {
  const _land = land.slice().map((row) => row.slice());
  const result: number[][] = [];

  for (let row = 0; row < _land.length; row += 1) {
    for (let col = 0; col < _land[row].length; col += 1) {
      if (_land[row][col] === 1) {
        const start = [row, col];
        const end = findEndOfLand(_land, row, col);
        //?
        const farmland = [...start, ...end];
        result.push(farmland);
        removeLand(_land, farmland);
      }
    }
  }

  return result;
}

let land = [[1, 0, 0], [0, 1, 1], [0, 1, 1]];
findFarmland(land);
// Output: [[0,0,0,0],[1,1,2,2]]

land = [[1, 1], [1, 1]];
findFarmland(land);
// Output: [[0,0,1,1]]

land = [[0]]
findFarmland(land);
// Output: []
