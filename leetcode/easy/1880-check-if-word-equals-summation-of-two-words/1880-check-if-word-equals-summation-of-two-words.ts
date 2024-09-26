/*
1880-check-if-word-equals-summation-of-two-words
leetcode/easy/1880. Check if Word Equals Summation of Two Words
Difficulty: easy
URL: https://leetcode.com/problems/squares-of-a-sorted-array/
*/


/*

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 */

const aCharCode = 'a'.charCodeAt(0);

function replaceToCharCode(str) {
  return parseInt(str.split('')
    .map(c => c.charCodeAt(0) - aCharCode)
    .join(''));
}

function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
  return replaceToCharCode(firstWord) + replaceToCharCode(secondWord) === replaceToCharCode(targetWord);
}

let firstWord = 'acb';
let secondWord = 'cba';
let targetWord = 'cdb';
console.log(isSumEqual(firstWord, secondWord, targetWord));
// Output: true
// Explanation:
//   The numerical value of firstWord is "acb" -> "021" -> 21.
// The numerical value of secondWord is "cba" -> "210" -> 210.
// The numerical value of targetWord is "cdb" -> "231" -> 231.
// We return true because 21 + 210 == 231.


firstWord = 'aaa';
secondWord = 'a';
targetWord = 'aab';
console.log(isSumEqual(firstWord, secondWord, targetWord));
// Output: false
// Explanation:
//   The numerical value of firstWord is "aaa" -> "000" -> 0.
// The numerical value of secondWord is "a" -> "0" -> 0.
// The numerical value of targetWord is "aab" -> "001" -> 1.
// We return false because 0 + 0 != 1.

firstWord = 'aaa', secondWord = 'a', targetWord = 'aaaa';
console.log(isSumEqual(firstWord, secondWord, targetWord));
// Output: true;
