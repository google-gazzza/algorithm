// [Easy] 893. Groups of Special-Equivalent Strings
// 893_groups_of_special-equivalent_strings

// https://leetcode.com/problems/groups-of-special-equivalent-strings
// Runtime: 80 ms, faster than 90.24% of JavaScript online submissions for Groups of Special-Equivalent Strings.
// Memory Usage: 45.8 MB, less than 14.64% of JavaScript online submissions for Groups of Special-Equivalent Strings.
const numSpecialEquivGroups = A => {
  const itemLen = A[0].length
  const groupSet = new Set()
  A.forEach(item => {
    const oddArr = []
    const evenArr = []
    for (let i = 0; i < itemLen; i = i + 1 | 0) {
      if (i % 2 === 0) {
        evenArr.push(item[i])
      } else {
        oddArr.push(item[i])
      }
    }
    evenArr.sort((a, b) => a.charCodeAt() - b.charCodeAt())
    oddArr.sort((a, b) => a.charCodeAt() - b.charCodeAt())
    const evenStr = evenArr.reduce((a, b) => a + b, '')
    const oddStr = oddArr.reduce((a, b) => a + b, '')
    const key = evenStr + '+' + oddStr
    if (!groupSet.has(key)) {
      groupSet.add(key)
    }
  })

  return groupSet.size
}
