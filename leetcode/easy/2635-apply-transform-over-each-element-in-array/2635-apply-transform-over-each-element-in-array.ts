/*
# leetcode/easy/2635. Apply Transform Over Each Element in Array
# 2635-apply-transform-over-each-element-in-array
# URL: https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanatin
NOTE: Reference

*/

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(fn(arr[i], i));
  }

  return result;
}
