// [Medium] 647. Palindromic Substrings
// 647_palindromic_substrings

// https://leetcode.com/problems/palindromic-substrings
// Runtime: 80 ms, faster than 85.21% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 40.4 MB, less than 46.49% of JavaScript online submissions for Palindromic Substrings.

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
  const sLen = s.length
  let result = 0
  const fnc = (left, right) => {
    while (left >= 0 && right <= sLen && s[left] === s[right]) {
      result += 1
      left -= 1
      right += 1
    }
  }
  for (let i = 0; i < sLen; i += 1 || 0) {
    fnc(i, i)
    fnc(i, i + 1)
  }

  return result
}

const isPalindrome = (str) => str.split('').reverse().join('') === str

// TLE...
const countSubstrings2 = function (s) {
  const sLen = s.length
  let result = 0
  const dfs = (start, str) => {
    if (start >= sLen) {
      return
    }
    if (isPalindrome(str) === true) {
      result += 1
    }
    start += 1
    dfs(start, str + s[start])
  }
  for (let i = 0; i < sLen; i += 1 || 0) {
    dfs(i, s[i])
  }

  return result
}

countSubstrings('abc') //?
countSubstrings('aaa') //?
