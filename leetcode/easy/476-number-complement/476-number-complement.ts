/*
476-number-complement
leetcode/easy/476. Number Complement
Difficulty: easy
URL: https://leetcode.com/problems/number-complement/

NOTE: Description
  The complement of an integer is the integer you get when you flip all
  the 0's to 1's and all the 1's to 0's in its binary representation.
  For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
  Given an integer num, return its complement.
  Given two strings ransomNote and magazine,
  return true if ransomNote can be constructed from magazine and false otherwise.
  Each letter in magazine can only be used once in ransomNote.

NOTE: Constraints
  1 <= num < 231

NOTE: Explanation
*/

function findComplement(num: number): number {
  const complement = num.toString(2)
    .split('')
    .map((e) => (e === '1' ? '0' : '1'))
    .join('');

  return parseInt(complement, 2);
};

// Example 1:
let num = 5;
console.log(findComplement(num));
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// Example 2:
num = 1;
console.log(findComplement(num));
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
