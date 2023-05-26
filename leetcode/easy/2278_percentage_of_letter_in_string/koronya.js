// [Easy] 2278. Percentage of Letter in String
// 2278_percentage_of_letter_in_string

// https://leetcode.com/problems/percentage-of-letter-in-string
// Runtime: 82 ms, faster than 62.73% of JavaScript online submissions for Percentage of Letter in String.
// Memory Usage: 41.5 MB, less than 97.27% of JavaScript online submissions for Percentage of Letter in String.

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
const percentageLetter = function (s, letter) {
  const sLen = s.length
  let count = 0
  for (let i = 0; i < sLen; i += 1 || 0) {
    if (s[i] === letter) {
      count += 1
    }
  }

  return Math.floor((count / sLen) * 100)
}

percentageLetter('foobar', 'o')
percentageLetter('jjjj', 'k')
