/*
1608-special-array-with-x-elements-greater-than-or-equal-x
leetcode/easy/1608. Special Array With X Elements Greater Than or Equal X
URL: https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function specialArray(nums: number[]): number {
  const result = nums.filter((num) => num > 0);

  result.sort((a, b) => a - b);

  if (result[0] >= result.length) {
    return result.length;
  }

  for (let i = 1; i < result[result.length - 1]; i += 1) {
    if (result.filter((num) => num >= i).length === i) {
      return i;
    }
  }

  return -1;
}

let nums = [3, 5];
console.log(specialArray(nums));
// Output: 2

nums = [0, 0];
console.log(specialArray(nums));
// Output: -1

nums = [0, 4, 3, 0, 4];
console.log(specialArray(nums));
// Output: 3

nums = [3, 9, 7, 8, 3, 8, 6, 6];
console.log(specialArray(nums));
// Output: 6
