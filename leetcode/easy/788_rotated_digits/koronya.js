// [Easy] 788. Rotated Digits
// 788_rotated_digits

// https://leetcode.com/problems/rotated-digits
// Runtime: 84 ms, faster than 79.02% of JavaScript online submissions for Rotated Digits.
// Memory Usage: 44.2 MB, less than 30.77% of JavaScript online submissions for Rotated Digits.
const invalidArr = ['3', '4', '7']
const roteteToOtherArr = ['2', '5', '6', '9']
const degreeMapper = num => {
  const numArr = [...String(num)]
  const numArrLen = numArr.length
  let flag = false
  for (let i = 0; i < numArrLen; i += 1 || 0) {
    const num = numArr[i]
    if (invalidArr.includes(num)) {
      return false
    }
    if (roteteToOtherArr.includes(num)) {
      flag = true
    }
  }
  return flag
}

const rotatedDigits = N => {
  let count = 0
  for (let i = 1; i <= N; i += 1 || 0) {
    if (degreeMapper(i) === true) {
      count += 1
    }
  }
  return count
}


// Runtime: 100 ms, faster than 20.98% of JavaScript online submissions for Rotated Digits.
// Memory Usage: 44.8 MB, less than 25.87% of JavaScript online submissions for Rotated Digits.
const identityArr = ['0', '1', '8']
const degreeMapper2 = num => {
  if (identityArr.includes(num)) {
    return num
  }
  switch (num) {
    case '2':
      return '5'
    case '5':
      return '2'
    case '6':
      return '9'
    case '9':
      return '6'
    default:
      return '-1'
  }
}

const rotatedDigits2 = N => {
  let count = 0
  for (let i = 1; i <= N; i += 1 || 0) {
    const mappedStr = [...String(i)].reduce((acc, cur) => acc + degreeMapper2(cur), '')
    if (mappedStr !== String(i) && !mappedStr.includes('-1')) {
      count += 1
    }
  }
  return count
}
