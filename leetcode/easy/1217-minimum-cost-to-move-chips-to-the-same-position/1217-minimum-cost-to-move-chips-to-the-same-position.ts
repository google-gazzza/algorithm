/*
1217-minimum-cost-to-move-chips-to-the-same-position
leetcode/easy/1217. Minimum Cost to Move Chips to The Same Position
Difficulty: easy
URL: https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
*/

function minCostToMoveChips(position: number[]): number {
    let odd: number = 0;
    let even: number = 0;
  
    position.forEach((e) => {
      if (e % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    });
  
    return Math.min(odd, even);
  };
  
  
  console.log(minCostToMoveChips([1, 2, 3]));
  // Output: 1
  
  console.log(minCostToMoveChips([2, 2, 2, 3, 3]));
  // Output: 2
  