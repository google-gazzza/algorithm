// [Easy] 2108. Find First Palindromic String in the Array
// 2108_find_first_palindromic_string_in_the_array

// https://leetcode.com/problems/find-first-palindromic-string-in-the-array
// Runtime: 104 ms, faster than 54.34% of JavaScript online submissions for Find First Palindromic String in the Array.
// Memory Usage: 46.5 MB, less than 23.74% of JavaScript online submissions for Find First Palindromic String in the Array.

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('')
}

/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = function (words) {
  const wordsLen = words.length
  for (let i = 0; i < wordsLen; i += 1 || 0) {
    const word = words[i]
    if (isPalindrome(word) === true) {
      return word
    }
  }
  return ''
}

firstPalindrome(['ada']) //?
firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']) //?
firstPalindrome(['notapalindrome', 'racecar']) //?
firstPalindrome(['def', 'ghi']) //?
