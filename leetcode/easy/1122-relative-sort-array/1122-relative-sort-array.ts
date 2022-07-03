/*
1122-relative-sort-array
leetcode/easy/1122. Relative Sort Array
URL: https://leetcode.com/problems/relative-sort-array/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function countingArray(nums: number[]): Map<number, number> {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  return map;
}

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const map = countingArray(arr1);

  let others = [];
  let result = [];


  for (let i = 0; i < arr2.length; i += 1) {
    if (map.has(arr2[i])) {
      result.push(...Array(map.get(arr2[i])).fill(arr2[i]));
      map.delete(arr2[i]);
    }
  }

  for (const [key, value] of Array.from(map)) {
    others.push(...Array(value).fill(key));
  }
  others.sort((a, b) => a - b);

  return result.concat(others);
};

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];
console.log(relativeSortArray(arr1, arr2));
// Output: [2,2,2,1,4,3,3,9,6,7,19]

arr1 = [28, 6, 22, 8, 44, 17], arr2 = [22, 28, 8, 6];
console.log(relativeSortArray(arr1, arr2));
// Output: [22,28,8,6,17,44]