/*
1051-height-checker
leetcode/easy/1051. Height Checker
Difficulty: easy
URL: https://leetcode.com/problems/height-checker/
 */

function heightChecker(heights: number[]): number {
    const sortedHeights = heights.slice().sort((a, b) => a - b);
  
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== sortedHeights[i]) {
        count += 1;
      }
    }
  
    return count;
  }
  