// [Medium] 616. Add Bold Tag in String
// 616_add_bold_tag_in_string

// https://leetcode.com/problems/add-bold-tag-in-string
// Runtime: 80 ms, faster than 88.37% of JavaScript online submissions for Add Bold Tag in String.
// Memory Usage: 41.7 MB, less than 78.29% of JavaScript online submissions for Add Bold Tag in String.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
const addBoldTag = function (s, words) {
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

addBoldTag('abcxyz123', ['abc', '123']) //?
addBoldTag('aaabbcc', ['aaa', 'aab', 'bc']) //?
