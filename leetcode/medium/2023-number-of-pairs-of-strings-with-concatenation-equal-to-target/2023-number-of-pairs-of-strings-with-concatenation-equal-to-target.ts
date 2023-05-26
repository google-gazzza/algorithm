/*
2023-number-of-pairs-of-strings-with-concatenation-equal-to-target
leetcode/medium/2023. Number of Pairs of Strings With Concatenation Equal to Target
URL: https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function numOfPairs(nums: string[], target: string): number {
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (target.indexOf(nums[i]) === 0) {
      const rest = target.slice(nums[i].length);

      for (let j = 0; j < nums.length; j += 1) {
        if (i !== j && nums[j] === rest) {
          count += 1;
        }
      }
    }
  }

  return count;
}

let nums = ['777', '7', '77', '77'];
let target = '7777';
numOfPairs(nums, target);
// Output: 4

nums = ['123', '4', '12', '34'], target = '1234';
numOfPairs(nums, target);
// Output: 2

nums = ['1', '1', '1'], target = '11';
numOfPairs(nums, target);
// Output: 6
