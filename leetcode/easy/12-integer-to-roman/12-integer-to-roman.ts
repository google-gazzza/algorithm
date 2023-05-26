/*
12-integer-to-roman
leetcode/easy/12. Integer to Roman
Difficulty: easy
URL: https://leetcode.com/problems/integer-to-roman/
*/

function intToRoman(num: number): string {
  let localNum = num;

  const result: string[] = [];
  const calculateRepeatCount = (dividend: number, divisor: number, roman: string) => {
    const repeatCount = Math.floor(dividend / divisor);

    for (let i = 0; i < repeatCount; i += 1) {
      result.push(roman);
    }

    localNum %= divisor;
  };

  calculateRepeatCount(localNum, 1000, 'M');
  calculateRepeatCount(localNum, 900, 'CM');
  calculateRepeatCount(localNum, 500, 'D');
  calculateRepeatCount(localNum, 400, 'CD');
  calculateRepeatCount(localNum, 100, 'C');
  calculateRepeatCount(localNum, 90, 'XC');
  calculateRepeatCount(localNum, 50, 'L');
  calculateRepeatCount(localNum, 40, 'XL');
  calculateRepeatCount(localNum, 10, 'X');
  calculateRepeatCount(localNum, 9, 'IX');
  calculateRepeatCount(localNum, 5, 'V');
  calculateRepeatCount(localNum, 4, 'IV');
  calculateRepeatCount(localNum, 1, 'I');

  return result.join('');
}

// Example 1:
//
let num = 3;
console.log(intToRoman(num));
// Output: "III"
// Explanation: 3 is represented as 3 ones.
//   Example 2:
//
num = 58;
console.log(intToRoman(num));
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:
//
num = 1994;
console.log(intToRoman(num));
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
