/*
2108-find-first-palindromic-string-in-the-array
leetcode/easy/2108. Find First Palindromic String in the Array
Difficulty: easy
URL: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
 */

function isPalindrome(word: string): boolean {
    return word.split('').reverse().join('') === word;
  }
  
  function firstPalindrome(words: string[]): string {
    for (let word of words) {
      if (isPalindrome(word)) {
        return word;
      }
    }
  
    return '';
  }
  