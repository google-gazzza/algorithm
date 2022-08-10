/*
2210-count-hills-and-valleys-in-an-array
leetcode/easy/2210. Count Hills and Valleys in an Array
URL: https://leetcode.com/problems/count-hills-and-valleys-in-an-array/

NOTE: Description
NOTE: Constraints
  - 3 <= nums.length <= 100
  - 1 <= nums[i] <= 100

NOTE: Explanation
NOTE: Reference
*/

function countHillValley(nums: number[]): number {
  let isGoingUp = false;
  let count = 0;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] !== nums[i]) {
      isGoingUp = nums[i - 1] < nums[i];
      nums.splice(0, i - 1);
      break;
    }
  }

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] < nums[i] && !isGoingUp) {
      count += 1;
      isGoingUp = true;
    } else if (nums[i - 1] > nums[i] && isGoingUp) {
      count += 1;
      isGoingUp = false;
    }
  }

  return count;
}


let nums = [2, 4, 1, 1, 6, 5];
console.log(countHillValley(nums));
// Output: 3
// Explanation:
//   At index 0: There is no non-equal neighbor of 2 on the left, so index 0 is neither a hill nor a valley.
//   At index 1: The closest non-equal neighbors of 4 are 2 and 1. Since 4 > 2 and 4 > 1, index 1 is a hill.
//   At index 2: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 2 is a valley.
//   At index 3: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 3 is a valley, but note that it is part of the same valley as index 2.
// At index 4: The closest non-equal neighbors of 6 are 1 and 5. Since 6 > 1 and 6 > 5, index 4 is a hill.
//   At index 5: There is no non-equal neighbor of 5 on the right, so index 5 is neither a hill nor a valley.
//   There are 3 hills and valleys so we return 3.
// Example 2:

nums = [6, 6, 5, 5, 4, 1];
console.log(countHillValley(nums));

nums = [1, 1, 1, 1, 1, 1, 1, 57, 57, 57, 50, 50, 50, 50, 22, 22, 22, 86];
console.log(countHillValley(nums));
// 2
// Output: 0
// Explanation:
//   At index 0: There is no non-equal neighbor of 6 on the left, so index 0 is neither a hill nor a valley.
//   At index 1: There is no non-equal neighbor of 6 on the left, so index 1 is neither a hill nor a valley.
//   At index 2: The closest non-equal neighbors of 5 are 6 and 4. Since 5 < 6 and 5 > 4, index 2 is neither a hill nor a valley.
//   At index 3: The closest non-equal neighbors of 5 are 6 and 4. Since 5 < 6 and 5 > 4, index 3 is neither a hill nor a valley.
//   At index 4: The closest non-equal neighbors of 4 are 5 and 1. Since 4 < 5 and 4 > 1, index 4 is neither a hill nor a valley.
//   At index 5: There is no non-equal neighbor of 1 on the right, so index 5 is neither a hill nor a valley.
//   There are 0 hills and valleys so we return 0.
