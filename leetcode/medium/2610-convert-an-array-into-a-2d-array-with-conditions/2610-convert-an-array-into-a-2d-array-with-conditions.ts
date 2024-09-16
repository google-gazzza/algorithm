/*
leetcode/medium/2610. Convert an Array Into a 2D Array With Conditions
2610-convert-an-array-into-a-2d-array-with-conditions
uRL: https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function findMatrix(nums: number[]): number[][] {
  const countMap: Map<number, number> = new Map();

  nums.forEach((num) => {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1);
    } else {
      countMap.set(num, 1);
    }
  });

  const result: number[][] = [];

  while (countMap.size > 0) {
    const current: number[] = [];

    countMap.forEach((value, key: number) => {
      current.push(key);

      if (value === 1) {
        countMap.delete(key);
      } else {
        countMap.set(key, value - 1);
      }
    });

    result.push(current);
  }

  return result;
}

let nums = [1, 3, 4, 1, 2, 3, 1];
console.log(findMatrix(nums));
// let Output: [[1,3,4,2],[1,3],[1]]

nums = [1, 2, 3, 4];
console.log(findMatrix(nums));
// Output: [[4,3,2,1]]
