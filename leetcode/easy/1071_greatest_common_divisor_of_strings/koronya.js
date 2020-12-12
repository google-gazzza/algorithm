// [Easy] 1071. Greatest Common Divisor of Strings
// 1071_greatest_common_divisor_of_strings

// https://leetcode.com/problems/greatest-common-divisor-of-strings
// Runtime: 88 ms, faster than 42.58% of JavaScript online submissions for Greatest Common Divisor of Strings.
// Memory Usage: 43.9 MB, less than 16.13% of JavaScript online submissions for Greatest Common Divisor of Strings.
const check = (partialStr, wholeStr) => {
  if (partialStr === wholeStr) {
    return true
  }
  const wholeStrLen = wholeStr.length
  const partialStrLen = partialStr.length
  if (wholeStrLen % partialStrLen !== 0) {
    return false
  }

  let repeat = wholeStrLen / partialStrLen
  let targetStr = partialStr
  let targetIndex = partialStrLen
  while (repeat > 0) {
    if (targetStr !== wholeStr.slice(0, targetIndex)) {
      return false
    }
    targetStr += partialStr
    targetIndex += partialStrLen
    repeat -= 1
  }

  return true
}

const gcdOfStrings = function (str1, str2) {
  if (str1 === str2) {
    return str1
  }
  const candidateArr = []
  const str1Len = str1.length
  let accStr1 = ''
  for (let i = 0; i < str1Len; i += 1 || 0) {
    accStr1 += str1[i]
    if (check(accStr1, str1) === true) {
      candidateArr.push(accStr1)
      console.log('accStr1: ', accStr1);
    }
  }
  for (let i = candidateArr.length - 1; i >= 0; i -= 1 || 0) {
    if (check(candidateArr[i], str2)) {
      return candidateArr[i]
    }
  }

  return ''
}
