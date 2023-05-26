/*
is-it-a-palindrome

# codewars/8kyu/Is it a palindrome?
Difficulty: 8kyu
URL: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function isPalindrome(x) {
  const lowercaseArray = [...x.toLowerCase()];
  
  return lowercaseArray.join('') === lowercaseArray.reverse().join('');
}

test("Fixed tests", function () {
  expect(isPalindrome("a")).toBeTruthy();
  expect(isPalindrome("aba")).toBeTruthy();
  expect(isPalindrome("Abba")).toBeTruthy();
  expect(isPalindrome("hello")).toBeFalsy();
  expect(isPalindrome("Bob")).toBeTruthy();
  expect(isPalindrome("Madam")).toBeTruthy();
  expect(isPalindrome("AbBa")).toBeTruthy();
  expect(isPalindrome("")).toBeTruthy();
});
