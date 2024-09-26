// [Easy] 824. Goat Latin
// 824_goat_latin

// https://leetcode.com/problems/goat-latin
// Runtime: 72 ms, faster than 68.81% of JavaScript online submissions for Goat Latin.
// Memory Usage: 36.8 MB, less than 39.45% of JavaScript online submissions for Goat Latin.

/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = S => {
  const vowelArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const ADD_STR = 'ma'
  let count = 0
  return S
    .split(' ')
    .map(words => {
      if (!vowelArr.includes(words[0])) {
        words = words.slice(1) + words[0]
      }
      count += 1
      return words + ADD_STR + 'a'.repeat(count)
    })
    .reduce((acc, cur) => acc + cur + ' ', '')
    .slice(0, -1)
}
