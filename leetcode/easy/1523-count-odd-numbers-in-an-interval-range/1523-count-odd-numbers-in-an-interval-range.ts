/*
1523-count-odd-numbers-in-an-interval-range
leetcode/easy/1523. Count Odd Numbers in an Interval Range
URL: https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

NOTE: Description

NOTE: Constraints
  - 0 <= low <= high <= 10^9

NOTE: Explanation
*/

function countOdds(low: number, high: number): number {
  let range = high - low + 1;

  if (low % 2 === 1) {
    range += 1;
  }

  if (high % 2 === 1) {
    range += 1;
  }

  return Math.floor(range / 2);
}

// Example 1:
let low = 3;
let high = 7;
console.log(countOdds(low, high));
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
//   Example 2:
//
low = 8;
high = 10;
console.log(countOdds(low, high));
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].

console.log(countOdds(21, 22));
