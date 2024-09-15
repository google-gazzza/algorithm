/*
2335-minimum-amount-of-time-to-fill-cups
leetcode/easy/2335. Minimum Amount of Time to Fill Cups
URL: https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function fillCups(amount: number[]): number {
  let count = 0;
  amount.sort((a, b) => b - a);

  while (amount[0] > 0) {
    amount[0] -= 1;
    amount[1] -= 1;
    count += 1;
    amount.sort((a, b) => b - a);
  }

  return count;
}

let amount = [1, 4, 2];
console.log(fillCups(amount));
// Output: 4
// Explanation: One way to fill up the cups is:
//   Second 1: Fill up a cold cup and a warm cup.
//   Second 2: Fill up a warm cup and a hot cup.
//   Second 3: Fill up a warm cup and a hot cup.
//   Second 4: Fill up a warm cup.
//   It can be proven that 4 is the minimum number of seconds needed.
//   Example 2:

amount = [5, 4, 4];
console.log(fillCups(amount));
// Output: 7
// Explanation: One way to fill up the cups is:
//   Second 1: Fill up a cold cup, and a hot cup.
//   Second 2: Fill up a cold cup, and a warm cup.
//   Second 3: Fill up a cold cup, and a warm cup.
//   Second 4: Fill up a warm cup, and a hot cup.
//   Second 5: Fill up a cold cup, and a hot cup.
//   Second 6: Fill up a cold cup, and a warm cup.
//   Second 7: Fill up a hot cup.
//   Example 3:

amount = [5, 0, 0];
console.log(fillCups(amount));
// Output: 5
// Explanation: Every second, we fill up a cold cup.
