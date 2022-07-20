/*
2341-maximum-number-of-pairs-in-array
leetcode/easy/2341. Maximum Number of Pairs in Array
URL: https://leetcode.com/problems/maximum-number-of-pairs-in-array/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function numberOfPairs(nums: number[]): number[] {
  let removedCount = 0;
  let notRemovedCount = 0;

  while (nums.length > 0) {
    const target = nums.shift();
    if (nums.indexOf(target) !== -1 && nums.splice(nums.indexOf(target), 1)[0] === target) {
      removedCount += 1;
    } else {
      notRemovedCount += 1;
    }
  }

  return [removedCount, notRemovedCount];
}

let nums = [1, 3, 2, 1, 3, 2, 2];
console.log(numberOfPairs(nums));
// Output: [3,1]

nums = [1, 1];
console.log(numberOfPairs(nums));
// Output: [1,0]

nums = [0];
console.log(numberOfPairs(nums));
// Output: [0,1]

nums = [1, 2, 3, 4, 5];
console.log(numberOfPairs(nums));
