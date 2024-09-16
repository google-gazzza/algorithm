/*
682-baseball-game
leetcode/easy/682. Baseball Game
URL: https://leetcode.com/problems/baseball-game/

NOTE: Description

NOTE: Constraints
  - 1 <= ops.length <= 1000
  - ops[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 104, 3 * 104].
  - For operation "+", there will always be at least two previous scores on the record.
  - For operations "C" and "D", there will always be at least one previous score on the record.

NOTE: Explanation
*/

function calPoints(ops: string[]): number {
  const stack: number[] = [];

  ops.forEach((e) => {
    switch (e) {
      case 'C':
        stack.pop();
        break;
      case 'D':
        stack.push(stack[stack.length - 1] * 2);
        break;
      case '+':
        stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        break;
      default:
        stack.push(parseInt(e, 10));
    }
  });

  return stack.reduce((a, b) => a + b, 0);
}

// Example 1:
//
let ops = ['5', '2', 'C', 'D', '+'];
console.log(calPoints(ops)); // 30
// Output: 30
// Explanation:
//   "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
//   The total sum is 5 + 10 + 15 = 30.
// Example 2:
//
ops = ['5', '-2', '4', 'C', 'D', '9', '+', '+'];
console.log(calPoints(ops)); // 27
// Output: 27
// Explanation:
//   "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
//   The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
