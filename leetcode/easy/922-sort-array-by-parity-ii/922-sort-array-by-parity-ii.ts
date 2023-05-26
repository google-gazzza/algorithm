/*
922-sort-array-by-parity-ii
leetcode/easy/922. Sort Array By Parity II
URL: https://leetcode.com/problems/sort-array-by-parity-ii/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function sortArrayByParityII(nums: number[]): number[] {
  const even: number[] = [];
  const odd: number[] = [];
  const result: number[] = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }

  while (even.length) {
    result.push(even.shift());
    result.push(odd.shift());
  }

  return result;
}

let nums = [4, 2, 5, 7];
console.log(sortArrayByParityII(nums));

// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
//   Example 2:

nums = [2, 3];
console.log(sortArrayByParityII(nums));
// Output: [2,3]
