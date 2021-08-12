// [Easy] 1119. Remove Vowels from a String
// 1119_remove_vowels_from_a_string

const vowels = ['a', 'e', 'i', 'o', 'u']

// https://leetcode.com/problems/remove-vowels-from-a-string
// Runtime: 68 ms, faster than 86.34% of JavaScript online submissions for Remove Vowels from a String.
// Memory Usage: 38.7 MB, less than 61.20% of JavaScript online submissions for Remove Vowels from a String.

/**
 * @param {string} s
 * @return {string}
 */
const removeVowels = function (s) {
  const sLen = s.length
  let resultStr = ''
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (vowels.includes(str) === false) {
      resultStr += str
    }
  }
  return resultStr
}

// Runtime: 72 ms, faster than 63.39% of JavaScript online submissions for Remove Vowels from a String.
// Memory Usage: 38.8 MB, less than 35.52% of JavaScript online submissions for Remove Vowels from a String.
const removeVowels2 = function (s) {
  return s.split('').reduce((acc, cur) => (vowels.includes(cur) === true ? acc : acc + cur), '')
}

removeVowels('leetcodeisacommunityforcoders') //?
removeVowels('aeiou') //?
