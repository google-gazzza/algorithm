/*
1716-calculate-money-in-leetcode-bank
leetcode/easy/1716. Calculate Money in Leetcode Bank
URL: https://leetcode.com/problems/calculate-money-in-leetcode-bank/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function totalMoney(n: number): number {
  const base = 1 + 2 + 3 + 4 + 5 + 6 + 7;
  const quotient = Math.floor(n / 7);
  const remainder = n % 7;
  let result = base * quotient;

  for (let i = 0; i < quotient; i += 1) {
    result += i * 7;
  }
  for (let i = 0; i < remainder; i += 1) {
    result += quotient + i + 1;
  }

  return result;
}

let n = 4;
console.log(totalMoney(n));
// Output: 10

n = 10;
console.log(totalMoney(n));
// Output: 37

n = 20;
console.log(totalMoney(n));
// Output: 96
