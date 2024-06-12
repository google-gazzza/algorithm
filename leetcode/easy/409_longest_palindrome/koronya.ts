// [Easy] 409. Longest Palindrome
// 409_longest_palindrome

// https://leetcode.com/problems/longest-palindrome
// Runtime: 84 ms, faster than 81.82% of TypeScript online submissions for Longest Palindrome.
// Memory Usage: 40.1 MB, less than 90.91% of TypeScript online submissions for Longest Palindrome.
function longestPalindrome (s: string): number {
  const strMap = new Map<string, number>()
  s.split('').forEach(str => {
    strMap.set(str, (strMap.get(str) || 0) + 1)
  })
  const countArr: number[] = [...strMap].map(item => item[1])
  let result: number = 0
  const evenArr: number[] = countArr.filter(count => count % 2 === 0)
  const oddArr: number[] = countArr.filter(count => count % 2 !== 0)
  evenArr.forEach(count => result += count)
  oddArr.forEach(count => result += count - 1)
  if (oddArr.length > 0) {
    result += 1
  }

  return result
}
