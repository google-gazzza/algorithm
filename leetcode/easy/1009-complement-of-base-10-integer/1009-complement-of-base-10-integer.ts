/*
1009-complement-of-base-10-integer
leetcode/easy/1009. Complement of Base 10 Integer
URL: https://leetcode.com/problems/complement-of-base-10-integer/

NOTE: Description

NOTE: Constraints
   - 1 <= w.length <= 104
   - 1 <= w[i] <= 105
   - pickIndex will be called at most 104 times.

NOTE: Explanation
*/

function bitwiseComplement(n: number): number {
  return parseInt(
    n.toString(2)
      .split('')
      .map((e) => (e === '1' ? '0' : '1'))
      .join(''),
    2,
  );
}

let n = 5;
// Output: 2
console.log(bitwiseComplement(n));
// Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.
// Example 2:

n = 7;
console.log(bitwiseComplement(n));
// // Output: 0
// // Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.
//
n = 10;
console.log(bitwiseComplement(n));
// Output: 5
// Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
