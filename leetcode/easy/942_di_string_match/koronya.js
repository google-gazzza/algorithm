// https://leetcode.com/problems/di-string-match
// Runtime: 76 ms, faster than 89.80% of JavaScript online submissions for DI String Match.
// Memory Usage: 37.8 MB, less than 10.00% of JavaScript online submissions for DI String Match.
const diStringMatch = S => {
  const SLen = S.length
  const resultArr = []
  let DLen = 0
  let ILen = 0;
  let maxLimit = SLen
  let minLimit = 0

  for (let i = 0; i < SLen; i += 1) {
    if (S[i] === 'D') {
      DLen += 1
    } else {
      ILen += 1
    }
  }

  if (S[0] === 'I') {
    resultArr.push(0)
    minLimit += 1
  } else {
    resultArr.push(SLen)
    maxLimit -= 1
  }

  for (let i = 0; i < SLen; i += 1) {
    if (S[i] === 'I') {
      ILen -= 1
      resultArr.push(maxLimit - ILen)
    } else {
      DLen -= 1
      resultArr.push(minLimit + DLen)
    }
  }

  return resultArr
}
