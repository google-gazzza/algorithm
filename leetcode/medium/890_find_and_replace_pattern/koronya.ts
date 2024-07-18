// [Medium] 890. Find and Replace Pattern
// 890_find_and_replace_pattern

// https://leetcode.com/problems/find-and-replace-pattern
// Runtime: 104 ms, faster than 16.67% of TypeScript online submissions for Find and Replace Pattern.
// Memory Usage: 40.1 MB, less than 100.00% of TypeScript online submissions for Find and Replace Pattern.
function findAndReplacePattern(words: string[], pattern: string): string[] {
  const getTransformedString = (str: string): string => {
    let count: number = 0
    let resultStr: string = ''
    const strMap = new Map<string, number>()
    const strLen: number = str.length
    for (let i: number = 0; i < strLen; i += 1) {
      const char: string = str[i]
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
  const transformedPatternString: string = getTransformedString(pattern)

  return words.filter((word) => getTransformedString(word) === transformedPatternString)
}
