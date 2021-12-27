// [Easy] 2108. Find First Palindromic String in the Array
// 2108_find_first_palindromic_string_in_the_array

// https://leetcode.com/problems/find-first-palindromic-string-in-the-array
// Runtime: 100 ms, faster than 64.52% of TypeScript online submissions for Find First Palindromic String in the Array.
// Memory Usage: 46.9 MB, less than 22.58% of TypeScript online submissions for Find First Palindromic String in the Array.

const isPalindrome = (str: string): boolean => {
  return str === str.split('').reverse().join('')
}

function firstPalindrome(words: string[]): string {
  const wordsLen: number = words.length
  for (let i: number = 0; i < wordsLen; i += 1) {
    const word: string = words[i]
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
