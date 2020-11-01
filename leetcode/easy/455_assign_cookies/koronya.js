// [Easy] 455. Assign Cookies
// 455_assign_cookies

// https://leetcode.com/problems/assign-cookies
// Runtime: 136 ms, faster than 19.19% of JavaScript online submissions for Assign Cookies.
// Memory Usage: 40.8 MB, less than 5.90% of JavaScript online submissions for Assign Cookies.
const findContentChildren = function (g, s) {
  const gLen = g.length
  let result = 0
  let nextTargetIndex = 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  s.forEach(sizeOfCookie => {
    while (true) {
      const greed = g[nextTargetIndex]
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
