/*
2422-merge-operations-to-turn-array-into-a-palindrome
leetcode/medium/2422. Merge Operations to Turn Array Into a Palindrome
URL: https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function minimumOperations(nums: number[]): number {
  let leftCursor = 0;
  let rightCursor = nums.length - 1;
  let operations = 0;

  while (leftCursor < rightCursor) {
    if (nums[leftCursor] === nums[rightCursor]) {
      leftCursor += 1;
      rightCursor -= 1;
      continue;
    }

    operations += 1;

    if (nums[leftCursor] > nums[rightCursor]) {
      nums.splice(rightCursor - 1, 2, nums[rightCursor - 1] + nums[rightCursor]);
      rightCursor -= 1;
    } else {
      nums.splice(leftCursor, 2, nums[leftCursor] + nums[leftCursor + 1]);
      rightCursor -= 1;
    }
  }

  return operations;
}

let nums = [4, 3, 2, 1, 2, 3, 1];
console.log(minimumOperations(nums));
// Output: 2

nums = [1, 2, 3, 4];
console.log(minimumOperations(nums));
// Output: 3
