// leetcode/easy/2634. Filter Elements from Array
// 2634-filter-elements-from-array
// URL: https://leetcode.com/problems/filter-elements-from-array/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
}
