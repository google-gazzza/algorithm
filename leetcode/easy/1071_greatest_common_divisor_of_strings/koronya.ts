// [Easy] 1071. Greatest Common Divisor of Strings
// 1071_greatest_common_divisor_of_strings

// https://leetcode.com/problems/greatest-common-divisor-of-strings
// Runtime: 92 ms, faster than 28.57% of TypeScript online submissions for Greatest Common Divisor of Strings.
// Memory Usage: 44.8 MB, less than 28.57% of TypeScript online submissions for Greatest Common Divisor of Strings.
const check = (partialStr: string, wholeStr: string): boolean => {
  if (partialStr === wholeStr) {
    return true
  }
  const wholeStrLen: number = wholeStr.length
  const partialStrLen: number = partialStr.length
  if (wholeStrLen % partialStrLen !== 0) {
    return false
  }

  let repeat: number = wholeStrLen / partialStrLen
  let targetStr: string = partialStr
  let targetIndex: number = partialStrLen
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

function gcdOfStrings (str1: string, str2: string): string {
  if (str1 === str2) {
    return str1
  }
  const candidateArr: string[] = []
  const str1Len: number = str1.length
  let accStr1: string = ''
  for (let i: number = 0; i < str1Len; i += 1) {
    accStr1 += str1[i]
    if (check(accStr1, str1) === true) {
      candidateArr.push(accStr1)
      console.log('accStr1: ', accStr1);
    }
  }
  for (let i: number = candidateArr.length - 1; i >= 0; i -= 1) {
    if (check(candidateArr[i], str2)) {
      return candidateArr[i]
    }
  }

  return ''
}
