// [Easy] 290. Word Pattern
// 290_word_pattern

// https://leetcode.com/problems/word-pattern
// Runtime: 80 ms, faster than 38.16% of JavaScript online submissions for Word Pattern.
// Memory Usage: 36.5 MB, less than 41.02% of JavaScript online submissions for Word Pattern.
const wordPattern = (pattern, str) => {
  const patternLen = pattern.length
  const strArr = str.split(' ')
  const strArrLen = strArr.length
  if (patternLen !== strArrLen) {
    return false
  }

  const patternMap = new Map()
  const strSet = new Set()
  for (let i = 0; i < patternLen; i = i + 1 | 0) {
    const item = pattern[i]
    const strItem = strArr[i]
    if (!patternMap.has(item) && !strSet.has(strItem)) {
      patternMap.set(item, strItem)
      strSet.add(strItem)
    } else {
      if (patternMap.get(item) !== strItem) {
        return false
      }
    }
  }

  return true
}
