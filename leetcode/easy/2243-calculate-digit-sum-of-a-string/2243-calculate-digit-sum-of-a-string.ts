/*
2243-calculate-digit-sum-of-a-string
leetcode/easy/2243. Calculate Digit Sum of a String
URL: https://leetcode.com/problems/calculate-digit-sum-of-a-string/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function sumStrings(str: string): number {
  return str.split('')
    .reduce((acc, curr) => acc + Number(curr), 0);
}

function digitSum(s: string, k: number): string {
  while (s.length > k) {
    const result = [];

    for (let i = 0; i < s.length; i += k) {
      result.push(sumStrings(s.substring(i, i + k)));
    }
    s = result.join('');
  }

  return s.toString();
}

let s = '11111222223';
let k = 3;
console.log(digitSum(s, k));
// Output: "135"
// Explanation:
//   - For the first round, we divide s into groups of size 3: "111", "112", "222", and "23".
//   ​​​​​Then we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5.
// So, s becomes "3" + "4" + "6" + "5" = "3465" after the first round.
// - For the second round, we divide s into "346" and "5".
//   Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5.
// So, s becomes "13" + "5" = "135" after second round.
//   Now, s.length <= k, so we return "135" as the answer.
//   Example 2:
//
s = '00000000';
k = 3;
console.log(digitSum(s, k));
// Output: "000"
// Explanation:
//   We divide s into "000", "000", and "00".
//   Then we calculate the digit sum of each group: 0 + 0 + 0 = 0, 0 + 0 + 0 = 0, and 0 + 0 = 0.
// s becomes "0" + "0" + "0" = "000", whose length is equal to k, so we return "000".
