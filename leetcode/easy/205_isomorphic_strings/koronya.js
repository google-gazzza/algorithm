// [Easy] 205. Isomorphic Strings
// 205_isomorphic_strings

// https://leetcode.com/problems/isomorphic-strings
// Runtime: 84 ms, faster than 79.68% of JavaScript online submissions for Isomorphic Strings.
// Memory Usage: 37.9 MB, less than 73.08% of JavaScript online submissions for Isomorphic Strings.
const isIsomorphic = (s, t) => {
  const sLen = s.length
  const sMap = new Map()
  const tMap = new Map()
  for (let i = 0; i < sLen; i = i + 1 | 0) {
    const strS = s[i]
    const strT = t[i]
    if (!sMap.has(strS)) {
      sMap.set(strS, strT)
    } else {
      if (sMap.get(strS) !== strT) {
        return false
      }
    }
    if (!tMap.has(strT)) {
      tMap.set(strT, strS)
    } else {
      if (tMap.get(strT) !== strS) {
        return false
      }
    }
  }

  return true
}
