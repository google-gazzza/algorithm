// [Medium] 1208. Get Equal Substrings Within Budget
// 1208_get_equal_substrings_within_budget

//  https://leetcode.com/problems/get-equal-substrings-within-budget
//  Runtime: 125 ms, faster than 47.62% of JavaScript online submissions for Get Equal Substrings Within Budget.
//  Memory Usage: 43 MB, less than 28.57% of JavaScript online submissions for Get Equal Substrings Within Budget.

const getDiffOfTwoString = (a, b) => Math.abs(a.charCodeAt(0) - b.charCodeAt(0))

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
const equalSubstring = function (s, t, maxCost) {
  const diffArr = s.split('').map((item, index) => getDiffOfTwoString(item, t[index]))
  const sLen = s.length
  let maxLen = 0

  let windowSum = 0
  let start = 0
  for (let end = 0; end < sLen; end += 1 || 0) {
    windowSum += diffArr[end]
    while (windowSum > maxCost) {
      windowSum -= diffArr[start]
      start += 1
    }
    maxLen = Math.max(maxLen, end - start + 1)
  }

  return maxLen
}

// TLE...ㅜㅜ
const equalSubstring2 = function (s, t, maxCost) {
  const diffArr = s.split('').map((item, index) => getDiffOfTwoString(item, t[index]))
  const sLen = s.length
  let maxLen = 0

  const dfs = (sum, count, start) => {
    if (sum > maxCost || count === sLen + 1 || start === sLen + 1) {
      return
    }
    maxLen = Math.max(maxLen, count)
    dfs(sum + diffArr[start], count + 1, start + 1)
  }

  for (let i = 0; i < sLen; i += 1 || 0) {
    dfs(diffArr[i], 1, i + 1)
  }

  return maxLen
}

// TLE...ㅜㅜ
const equalSubstring3 = function (s, t, maxCost) {
  const sLen = s.length
  let maxLen = 0
  const dfs = (str, start) => {
    const strLen = str.length
    if (str.split('').reduce((acc, cur, index) => acc + getDiffOfTwoString(cur, t[index + start]), 0) > maxCost) {
      return
    }
    maxLen = Math.max(maxLen, strLen)
    if (strLen + start === sLen) {
      return
    }
    dfs(str + s[strLen + start], start)
  }

  for (let i = 0; i < sLen; i += 1 || 0) {
    dfs(s[i], i)
  }
  return maxLen
}

equalSubstring('abcd', 'bcdf', 3) //?
equalSubstring('abcd', 'cdef', 3) //?
equalSubstring('abcd', 'acde', 0) //?
equalSubstring('abcd', 'bcde', 0) //?

equalSubstring('krrgw', 'zjxss', 19) //?

equalSubstring('krpgjbjjznpzdfy', 'nxargkbydxmsgby', 14) //?
equalSubstring('zdfy', 'sgby', 20) //?
