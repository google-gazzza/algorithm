// [Easy] 1180. Count Substrings with Only One Distinct Letter
// 1180_count_substrings_with_only_one_distinct_letter

// https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter
// Runtime: 2024 ms, faster than 5.77% of JavaScript online submissions for Count Substrings with Only One Distinct Letter.
// Memory Usage: 46.1 MB, less than 5.77% of JavaScript online submissions for Count Substrings with Only One Distinct Letter.

const isDistinctLetter = (str) => {
  const strLen = str.length
  const target = str[0]
  for (let i = 1; i < strLen; i += 1 || 0) {
    if (str[i] !== target) {
      return false
    }
  }
  return true
}

/**
 * @param {string} s
 * @return {number}
 */
const countLetters = function (s) {
  let count = 0
  const sLen = s.length
  const backTracking = (start, str) => {
    if (isDistinctLetter(str) === false) {
      return
    }
    count += 1
    if (start < sLen - 1) {
      start += 1
      backTracking(start, str + s[start])
    }
  }
  for (let i = 0; i < sLen; i += 1 || 0) {
    backTracking(i, s[i])
  }

  return count
}

countLetters('aaaba') //?
countLetters('aaaaaaaaaa') //?
