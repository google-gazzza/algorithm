/*
422-valid-word-square
leetcode/easy/422. Valid Word Square
Difficulty: easy
URL: https://leetcode.com/problems/valid-word-square/

NOTE: Description

NOTE: Constraints
  1 <= words.length <= 500
  1 <= words[i].length <= 500
  words[i] consists of only lowercase English letters.

NOTE: Explanation
*/

function getRowElements(array: string[], rowIndex: number): string[] {
  return array[rowIndex].slice().split('');
}

function getColumnElements(array: string[], columnIndex: number): string[] {
  return array.map((row) => row[columnIndex]).slice();
}

function validWordSquare(words: string[]): boolean {
  return words.every((_, i) => {
    return getRowElements(words, i).join('') === getColumnElements(words, i).join('');
  });
}

let words = ['abcd', 'bnrt', 'crmy', 'dtye'];
console.log(validWordSquare(words));
// Output: true
// Explanation:
//   The 1st row and 1st column both read "abcd".
//   The 2nd row and 2nd column both read "bnrt".
//   The 3rd row and 3rd column both read "crmy".
//   The 4th row and 4th column both read "dtye".
//   Therefore, it is a valid word square.

words = ['abcd', 'bnrt', 'crm', 'dt'];
console.log(validWordSquare(words));
// Output: true
// Explanation:
//   The 1st row and 1st column both read "abcd".
//   The 2nd row and 2nd column both read "bnrt".
//   The 3rd row and 3rd column both read "crm".
//   The 4th row and 4th column both read "dt".
//   Therefore, it is a valid word square.

words = ['ball', 'area', 'read', 'lady'];
console.log(validWordSquare(words));
// Output: false
// Explanation:
//   The 3rd row reads "read" while the 3rd column reads "lead".
//   Therefore, it is NOT a valid word square.

words = ['abaa', 'aaab', 'baaa', 'aaba'];
console.log(validWordSquare(words));
//  "abaa"
//  "aaab",
//  "baaa",
//  "aaba"

