// [Easy] 455. Assign Cookies
// 455_assign_cookies

// https://leetcode.com/problems/assign-cookies
// Runtime: 152 ms, faster than 22.22% of TypeScript online submissions for Assign Cookies.
// Memory Usage: 42.7 MB, less than 11.11% of TypeScript online submissions for Assign Cookies.
const findContentChildren = function (g: number[], s: number[]): number {
  const gLen: number = g.length
  let result: number = 0
  let nextTargetIndex: number = 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  s.forEach(sizeOfCookie => {
    while (true) {
      const greed: number = g[nextTargetIndex]
      if (nextTargetIndex >= gLen) {
        break
      }
      if (sizeOfCookie >= greed) {
        result += 1
        nextTargetIndex += 1
        break
      } else {
        nextTargetIndex += 1
      }
    }
    nextTargetIndex = result
  })

  return result
}
