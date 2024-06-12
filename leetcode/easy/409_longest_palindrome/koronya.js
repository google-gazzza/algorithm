// [Easy] 409. Longest Palindrome
// 409_longest_palindrome

// https://leetcode.com/problems/longest-palindrome
// Runtime: 84 ms, faster than 73.65% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 39.2 MB, less than 94.60% of JavaScript online submissions for Longest Palindrome.
const longestPalindrome = function (s) {
  const strMap = new Map()
  s.split('').forEach(str => {
    strMap.set(str, (strMap.get(str) || 0) + 1)
  })
  const countArr = [...strMap].map(item => item[1])
  let result = 0
  const evenArr = countArr.filter(count => count % 2 === 0)
  const oddArr = countArr.filter(count => count % 2 !== 0)
  evenArr.forEach(count => result += count)
  oddArr.forEach(count => result += count - 1)
  if (oddArr.length > 0) {
    result += 1
  }

  return result
}
