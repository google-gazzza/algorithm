/*
370-range-addition
leetcode/medium/370. Range Addition
URL: https://leetcode.com/problems/range-addition/

NOTE: Description
NOTE: Constraints
  - 1 <= length <= 105
  - 0 <= updates.length <= 104
  - 0 <= startIdxi <= endIdxi < length
  - -1000 <= inci <= 1000

NOTE: Explanation
*/

function getModifiedArray(length: number, updates: number[][]): number[] {
  const arr: number[] = new Array<number>(length).fill(0);

  updates.forEach(([startIdx, endIdx, inc]) => {
    for (let i = startIdx; i <= endIdx; i += 1) {
      arr[i] += inc;
    }
  });

  return arr;
}

let length = 5;
let updates = [[1, 3, 2], [2, 4, 3], [0, 2, -2]];
console.log(getModifiedArray(length, updates));
// Output: [-2,0,3,5,3]

length = 10;
updates = [[2, 4, 6], [5, 6, 8], [1, 9, -4]];
console.log(getModifiedArray(length, updates));
// Output: [0, -4, 2, 2, 2, 4, 4, -4, -4, -4];
