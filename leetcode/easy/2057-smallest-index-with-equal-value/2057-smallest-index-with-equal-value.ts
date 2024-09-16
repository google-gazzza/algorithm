/*
2057-smallest-index-with-equal-value
leetcode/easy/2057. Smallest Index With Equal Value
Difficulty: easy
URL: https://leetcode.com/problems/smallest-index-with-equal-value/
*/

function smallestEqual(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === i % 10) {
        return i;
      }
    }
  
    return -1;
  }
  
  console.log(smallestEqual([0, 1, 2]));
  // 0
  console.log(smallestEqual([4, 3, 2, 1]));
  // 2
  console.log(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
  // -1
  