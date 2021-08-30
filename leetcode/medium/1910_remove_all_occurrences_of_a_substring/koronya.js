// [Medium] 1910. Remove All Occurrences of a Substring
// 1910_remove_all_occurrences_of_a_substring

// https://leetcode.com/problems/remove-all-occurrences-of-a-substring
// Runtime: 88 ms, faster than 36.08% of JavaScript online submissions for Remove All Occurrences of a Substring.
// Memory Usage: 39.8 MB, less than 87.34% of JavaScript online submissions for Remove All Occurrences of a Substring.

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
const removeOccurrences = function (s, part) {
  let resultStr = s
  const partLen = part.length
  let findIndex
  while (true) {
    findIndex = resultStr.indexOf(part)
    if (findIndex === -1) {
      break
    }
    resultStr = resultStr.substr(0, findIndex) + resultStr.substr(findIndex + partLen)
  }

  return resultStr
}

removeOccurrences('daabcbaabcbc', 'abc') //?
removeOccurrences('axxxxyyyyb', 'xy') //?
