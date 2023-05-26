// [Medium] 890. Find and Replace Pattern
// 890_find_and_replace_pattern

// https://leetcode.com/problems/find-and-replace-pattern
// Runtime: 84 ms, faster than 58.75% of JavaScript online submissions for Find and Replace Pattern.
// Memory Usage: 40.7 MB, less than 55.00% of JavaScript online submissions for Find and Replace Pattern.
const findAndReplacePattern = function (words, pattern) {
  const getTransformedString = (str) => {
    let count = 0
    let resultStr = ''
    const strMap = new Map()
    const strLen = str.length
    for (let i = 0; i < strLen; i += 1 || 0) {
      const char = str[i]
      if (!strMap.has(char)) {
        count += 1
        strMap.set(char, count)
        resultStr += String(count)
      } else {
        resultStr += String(strMap.get(char))
      }
    }
    return resultStr
  }
  const transformedPatternString = getTransformedString(pattern)

  return words.filter((word) => getTransformedString(word) === transformedPatternString)
}
