/*
1762-buildings-with-an-ocean-view
leetcode/medium/1762. Buildings With an Ocean View
URL: https://leetcode.com/problems/buildings-with-an-ocean-view/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function findBuildings(heights: number[]): number[] {
  let max = 0;
  const result: number[] = [];

  for (let i = heights.length - 1; i >= 0; i -= 1) {
    if (heights[i] > max) {
      max = heights[i];
      result.unshift(i);
    }
  }

  return result;
}

let heights = [4, 2, 3, 1];
console.log(findBuildings(heights));
// Output: [0,2,3]
// Explanation: Building 1 (0-indexed) does not have an ocean view because building 2 is taller.
//   Example 2:
//
heights = [4, 3, 2, 1];
console.log(findBuildings(heights));
// Output: [0,1,2,3]
// Explanation: All the buildings have an ocean view.
//   Example 3:
//
heights = [1, 3, 2, 4];
console.log(findBuildings(heights));
// Output: [3]
// Explanation: Only building 3 has an ocean view.
