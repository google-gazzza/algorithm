// [Medium] 758. Bold Words in String
// 758_bold_words_in_string

// https://leetcode.com/problems/bold-words-in-string
// Runtime: 99 ms, faster than 53.33% of JavaScript online submissions for Bold Words in String.
// Memory Usage: 40.8 MB, less than 86.67% of JavaScript online submissions for Bold Words in String.

/**
 * @param {string[]} words
 * @param {string} s
 * @return {string}
 */
const boldWords = function (words, s) {
  const numSet = new Set()
  words.forEach((word) => {
    const wordLen = word.length
    let prevIndex = s.indexOf(word)
    while (prevIndex !== -1) {
      const limit = prevIndex + wordLen
      for (let i = prevIndex; i < limit; i += 1 || 0) {
        numSet.add(i)
      }
      prevIndex = s.indexOf(word, prevIndex + 1)
    }
  })

  const sLen = s.length
  let boldOpen = false
  let result = ''
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (numSet.has(i)) {
      if (boldOpen === true) {
        result += str
      } else {
        boldOpen = true
        result += `<b>${str}`
      }
    } else {
      if (boldOpen === true) {
        boldOpen = false
        result += `</b>${str}`
      } else {
        result += str
      }
    }
  }
  if (boldOpen === true) {
    result += '</b>'
  }

  return result
}

// boldWords(['ab', 'bc'], 'aabcd') //?
// boldWords(['ab', 'cb'], 'aabcd') //?

// boldWords(['ab', 'bc'], 'aabcdeab') //?

boldWords(['e', 'cab', 'de', 'cc', 'db'], 'cbccceeead') //?
