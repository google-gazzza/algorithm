// [Easy] 345. Reverse Vowels of a String
// 345_reverse_vowels_of_a_string

// https://leetcode.com/problems/reverse-vowels-of-a-string
// Runtime: 3148 ms, faster than 5.07% of JavaScript online submissions for Reverse Vowels of a String.
// Memory Usage: 44.8 MB, less than 56.44% of JavaScript online submissions for Reverse Vowels of a String.

const vowelsArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const candidateArr = []
  const indexArr = []
  const sLen = s.length
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (vowelsArr.includes(str) === true) {
      indexArr.push(i)
      candidateArr.push(str)
    }
  }
  candidateArr.reverse()
  let targetIndex = -1
  return s
    .split('')
    .map((item, index) => {
      if (indexArr.includes(index) === true) {
        targetIndex += 1
        return candidateArr[targetIndex]
      }
      return item
    })
    .join('')
}

// reverseVowels('hello') //?
// reverseVowels('leetcode') //?
reverseVowels('aA') //?
