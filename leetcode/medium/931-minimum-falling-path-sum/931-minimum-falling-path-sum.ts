// leetcode/medium/931. Minimum Falling Path Sum
// 931-minimum-falling-path-sum
// URL: https://leetcode.com/problems/minimum-falling-path-sum/description/?envType=study-plan-v2&envId=dynamic-programming


function addMinimunPath(matrix: number[][], rowIndex: number, columnIndex: number) {
  let min = Number.MAX_SAFE_INTEGER;

  if (columnIndex > 0) {
    const leftDiagonal = matrix[rowIndex + 1][columnIndex - 1];
    min = Math.min(min, leftDiagonal);
  }

  if (columnIndex < matrix[0].length - 1) {
    const rightDiagonal = matrix[rowIndex + 1][columnIndex + 1];
    min = Math.min(min, rightDiagonal);
  }

  const bottom = matrix[rowIndex + 1][columnIndex];
  min = Math.min(min, bottom);

  return min;
}

function minFallingPathSum(matrix: number[][]): number {

  for (let rowIndex = matrix.length - 2; rowIndex >= 0; rowIndex--) {
    for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
      matrix[rowIndex][columnIndex] += addMinimunPath(matrix, rowIndex, columnIndex);
    }
  }
  matrix;

  return Math.min(...matrix[0]);
};

let matrix = [[2, 1, 3], [6, 5, 4], [7, 8, 9]];
// console.log(minFallingPathSum(matrix) === 13);

matrix = [[-19, 57], [-40, -5]];
// console.log(minFallingPathSum(matrix) === -59);

matrix= [[17,82],[1,-44]]
console.log(minFallingPathSum(matrix));

