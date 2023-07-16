// leetcode/easy/2677. Chunk Array
// 2677-chunk-array
// URL: https://leetcode.com/problems/chunk-array/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function chunk(arr: any[], size: number): any[][] {
  const result: number[][] = [];

  while (arr.length) {
    result.push(arr.splice(0, size));
  }

  return result;
}

let arr = [1, 2, 3, 4, 5];
let size = 1;
console.log(chunk(arr, size));
// Output: [[1],[2],[3],[4],[5]]

arr = [1, 9, 6, 3, 2];
size = 3;
console.log(chunk(arr, size));
// Output: [[1,9,6],[3,2]]

arr = [8, 5, 3, 2, 6];
size = 6;
console.log(chunk(arr, size));
// Output: [[8,5,3,2,6]]
