// https://leetcode.com/problems/increasing-decreasing-string
// Runtime: 100 ms, faster than 38.92% of JavaScript online submissions for Increasing Decreasing String.
// Memory Usage: 37.6 MB, less than 100.00% of JavaScript online submissions for Increasing Decreasing String.

const sortString = s => {
  const sArr = [...s]
  sArr.sort((a, b) => a.charCodeAt() - b.charCodeAt())
  let resultStr = ''

  const koroNextString = (str) => {
    if (sArr.length === 0) {
      return ''
    }
    if (str == null) {
      const targetStr = sArr.shift()
      resultStr += targetStr
      return targetStr
    }
    const sArrLen = sArr.length
    const strCharCode = str.charCodeAt()
    for (let i = 0; i < sArrLen; i = i + 1 | 0) {
      const targetStr = sArr[i]
      if (targetStr.charCodeAt() > strCharCode) {
        resultStr += targetStr
        sArr.splice(i, 1)
        return targetStr
      }
    }
    return ''
  }
  const koroPrevString = (str) => {
    if (sArr.length === 0) {
      return ''
    }
    if (str == null) {
      const targetStr = sArr.pop()
      resultStr += targetStr
      return targetStr
    }
    const lastIndex = sArr.length - 1
    const strCharCode = str.charCodeAt()
    for (let i = lastIndex; i >= 0; i = i - 1 | 0) {
      const targetStr = sArr[i]
      if (targetStr.charCodeAt() < strCharCode) {
        resultStr += targetStr
        sArr.splice(i, 1)
        return targetStr
      }
    }
    return ''
  }

  let target
  while (sArr.length > 0) {
    do {
      target = koroNextString(target)
    } while (target !== '')
    target = null
    do {
      target = koroPrevString(target)
    } while (target !== '')
    target = null
  }

  return resultStr
}
