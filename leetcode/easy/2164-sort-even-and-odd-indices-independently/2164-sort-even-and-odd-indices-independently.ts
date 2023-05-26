/*
2164-sort-even-and-odd-indices-independently
leetcode/easy/2164. Sort Even and Odd Indices Independently
URL: https://leetcode.com/problems/sort-even-and-odd-indices-independently/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function sortEvenOdd(nums: number[]): number[] {
  const even: number[] = [];
  const odd: number[] = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (i % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }

  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);

  const result: number[] = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (i % 2 === 0) {
      result.push(even.shift());
    } else {
      result.push(odd.shift());
    }
  }

  return result;
}

let nums = [4, 1, 2, 3];
console.log(sortEvenOdd(nums));
// Output: [2,3,4,1]

nums = [2, 1];
console.log(sortEvenOdd(nums));
// Output: [2,1]

nums = [36, 45, 32, 31, 15, 41, 9, 46, 36, 6, 15, 16, 33, 26, 27, 31, 44, 34];
console.log(sortEvenOdd(nums));
// Expected
//   [9,46,15,45,15,41,27,34,32,31,33,31,36,26,36,16,44,6]
