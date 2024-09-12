/*
11-container-with-most-water

# leetcode/medium/11. Container With Most Water
Difficulty: medium
URL: https://leetcode.com/problems/container-with-most-water/

## Approach

### en

### kr

## Solution
### JavaScript

*/

/**
 * @param {number[]} height
 * @return {number}
 */

// middle-out
const maxArea = (height) => {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  
  while (i < j) {
    max = Math.max(max, (Math.min(height[i], height[j]) * (j - i)));
    
    if (height[i] < height[j]) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  
  return max;
};

// brute-force
const maxArea = function (height) {
  let max = 0;

  for (let i = 0; i < height.length; i += 1) {
    for (let j = 0; j < height.length; j += 1) {
      const min = Math.min(height[i], height[j]);
      const distance = Math.abs(i - j);
      const area = min * distance;

      if (area > max) {
        max = area;
      }
    }
  }

  return max;
};


// test
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

console.log(maxArea([1, 1]), 1);
// Input: height = [1,1]
// Output: 1

console.log(maxArea([4, 3, 2, 1, 4]), 16);
// Input: height = [4,3,2,1,4]
// Output: 16

console.log(maxArea([1, 2, 1]), 2);
// Input: height = [1,2,1]
// Output: 2
