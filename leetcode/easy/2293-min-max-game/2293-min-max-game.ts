/*
2293-min-max-game
leetcode/easy/2293. Min Max Game
URL: https://leetcode.com/problems/min-max-game/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function minMaxGame(nums: number[]): number {
  let queue: number[] = nums;
  let nextQueue: number[] = [];

  while (queue.length > 1) {
    while (queue.length > 1) {
      nextQueue.push(Math.min(...queue.splice(0, 2)));
      if (queue.length > 1) {
        nextQueue.push(Math.max(...queue.splice(0, 2)));
      }
    }
    queue = [...nextQueue];
    nextQueue = [];
  }

  return queue[0];
};

let nums = [1, 3, 5, 2, 4, 8, 2, 2];
console.log(minMaxGame(nums));
// Output: 1
// Explanation: The following arrays are the results of applying the algorithm repeatedly.
//   First: nums = [1,5,4,2]
// Second: nums = [1,4]
// Third: nums = [1]
// 1 is the last remaining number, so we return 1.
// Example 2:
//
nums = [3];
console.log(minMaxGame(nums));
// Output: 3
// Explanation: 3 is already the last remaining number, so we return 3.

nums = [999, 939, 892, 175, 114, 464, 850, 107];
console.log(minMaxGame(nums));
