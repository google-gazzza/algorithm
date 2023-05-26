/*
680-valid-palindrome-ii

# leetcode/easy/680. Valid Palindrome II
Difficulty: easy
URL: https://leetcode.com/problems/valid-palindrome-ii/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const validPalindrome = function (s, leftIndex, rightIndex, isRecursive = false) {
  leftIndex = leftIndex || 0;
  rightIndex = rightIndex || s.length - 1;
  
  while (leftIndex <= rightIndex) {
    if (s[leftIndex] !== s[rightIndex]) {
      if (!isRecursive) {
        return validPalindrome(s, leftIndex + 1, rightIndex, true)
          || validPalindrome(s, leftIndex, rightIndex - 1, true);
      }
      return false;
    }
    
    leftIndex += 1;
    rightIndex -= 1;
  }
  
  return true;
};

test('validPalindrome', () => {
  expect(validPalindrome('aba')).toBeTruthy();
  expect(validPalindrome('yd')).toBeTruthy();
  expect(validPalindrome('abca')).toBeTruthy();
  expect(validPalindrome('abc')).toBeFalsy();
  expect(validPalindrome('abcba')).toBeTruthy();
  expect(validPalindrome('cbbcc')).toBeTruthy();
  expect(validPalindrome('eccer')).toBeTruthy();
  expect(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga")).toBeTruthy();
  expect(validPalindrome('deeee')).toBeTruthy();
  expect(validPalindrome('acxcybycxcxa')).toBeTruthy();
});
