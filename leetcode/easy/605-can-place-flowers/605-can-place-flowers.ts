/*
605-can-place-flowers
leetcode/easy/605. Can Place Flowers
Difficulty: easy
URL: https://leetcode.com/problems/can-place-flowers/

NOTE: Description

NOTE: Constraints
  - 1 <= flowerbed.length <= 2 * 104
  - flowerbed[i] is 0 or 1.
  - There are no two adjacent flowers in flowerbed.
  - 0 <= n <= flowerbed.length

NOTE: Explanation
*/

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  flowerbed.unshift(0);
  flowerbed.push(0);

  for (let i = 1; i < flowerbed.length; i += 1) {
    if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      n -= 1;
    }
  }

  return n <= 0;
};

// Example 1:
let flowerbed = [1, 0, 0, 0, 1];
let n = 1;
console.log(canPlaceFlowers(flowerbed, n)); // true
// Output: true
//

// Example 2:
flowerbed = [1, 0, 0, 0, 1];
n = 2;
console.log(canPlaceFlowers(flowerbed, n));
// Output: false
