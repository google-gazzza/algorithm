// leetcode/medium/2624. Snail Traversal
// 2624-snail-traversal
// URL: https://leetcode.com/problems/snail-traversal/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
  }
}

Array.prototype.snail = function (rowsCount: number, colsCount: number): number[][] {
  const result: any[][] = [];

  for (let i = 0; i < rowsCount; i += 1) {
    result.push([]);
  }

  if (rowsCount * colsCount !== this.length) {
    return [];
  }

  let index = 0;

  for (let columnIndex = 0; columnIndex < colsCount; columnIndex += 1) {
    for (let rowIndex = 0; rowIndex < rowsCount; rowIndex += 1) {
      let targetRow = 0;

      if (columnIndex % 2 === 0) {
        targetRow = rowIndex;
      } else {
        targetRow = rowsCount - rowIndex - 1;
      }

      result[targetRow].push(this[index]);
      index += 1;
    }
  }

  return result;
};

const arr = [1, 2, 3, 4];
arr.snail(1, 4); // [[1,2,3,4]]
//?

nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
rowsCount = 5;
colsCount = 4;
nums.snail(rowsCount, colsCount);
//?
