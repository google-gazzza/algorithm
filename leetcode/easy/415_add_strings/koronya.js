// https://leetcode.com/problems/add-strings
// Runtime: 60 ms, faster than 93.84% of JavaScript online submissions for Add Strings.
// Memory Usage: 36.2 MB, less than 50.00% of JavaScript online submissions for Add Strings.

const isBigFirst = (first, last) => {
  const firstLen = first.length
  const lastLen = last.length
  if (firstLen > lastLen) {
    return true
  }
  if (firstLen < lastLen) {
    return false
  }

  for (let i = 0; i < firstLen; i += 1) {
    if (first[i] > last[i]) {
      return true
    }
    if (first[i] < last[i]) {
      return false
    }
  }
  return false
}

const addStrings = (num1, num2) => {
  const num1Len = num1.length
  const num2Len = num2.length
  const overlapLen = Math.min(num1Len, num2Len)
  const biggerNum = isBigFirst(num1, num2) ? num1 : num2
  const biggerNumLen = biggerNum.length
  const restLen = biggerNum.length - overlapLen
  let resultStr = ''
  let upValue = 0
  for (let i = 0; i < overlapLen; i += 1) {
    const sum = upValue + Number(num1[num1Len - 1 - i]) + Number(num2[num2Len - 1 - i])
    const underTenValue = sum > 9 ? sum - 10 : sum
    resultStr = underTenValue + resultStr
    upValue = sum > 9 ? 1 : 0
  }

  for (let i = overlapLen; i < overlapLen + restLen; i += 1) {
    const sum = upValue + Number(biggerNum[biggerNumLen - 1 - i])
    const underTenValue = sum > 9 ? sum - 10 : sum
    resultStr = underTenValue + resultStr
    upValue = sum > 9 ? 1 : 0
  }

  if (upValue === 1) {
    resultStr = '1' + resultStr
  }

  return resultStr
}
