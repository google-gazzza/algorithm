/*
991-broken-calculator
leetcode/medium/991. Broken Calculator
URL: https://leetcode.com/problems/broken-calculator/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function brokenCalc(startValue: number, target: number): number {
  if (startValue > target) {
    return startValue - target;
  }

  let operationCount = 0;

  while (target > startValue) {
    operationCount += 1;

    if (target % 2 === 0) {
      target /= 2;
      if (target < startValue) {
        const distance = Math.abs(startValue - target);
        operationCount += distance;
        target = startValue;
      }
    } else {
      target += 1;
    }
  }

  return operationCount;
}

let startValue = 2;
let target = 3;
console.log(brokenCalc(startValue, target));
// Output: 2
// Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.

startValue = 5;
target = 8;
console.log(brokenCalc(startValue, target));
// Output: 2
// Explanation: Use decrement and then double {5 -> 4 -> 8}.

startValue = 3;
target = 10;
console.log(brokenCalc(startValue, target));
// Output: 3
// Explanation: Use double, decrement and double {3 -> 6 -> 5 -> 10}.

startValue = 1024;
target = 1;
console.log(brokenCalc(startValue, target));
