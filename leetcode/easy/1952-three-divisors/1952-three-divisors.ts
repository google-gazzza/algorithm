/*
1952-three-divisors
leetcode/easy/1952. Three Divisors
URL: https://leetcode.com/problems/three-divisors/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function isThree(n: number): boolean {
  if (n < 3) {
    return false;
  }

  let count = 1;

  for (let i = 2; i <= n; i += 1) {
    if (n % i === 0) {
      count += 1;
    }
    if (count > 3) {
      return false;
    }
  }

  return count === 3;
}

let n = 2;
console.log(isThree(n));
// Output: false
// Explantion: 2 has only two divisors: 1 and 2.
// Example 2:

n = 4;
console.log(isThree(n));

n = 13;
// console.log(isThree(n));
// Output: true
// Explantion: 4 has three divisors: 1, 2, and 4.
