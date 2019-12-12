// https://leetcode.com/problems/count-and-say
// Runtime: 48 ms, faster than 97.17% of JavaScript online submissions for Count and Say.
// Memory Usage: 35.7 MB, less than 33.33% of JavaScript online submissions for Count and Say.
const countAndSay = n => {
  if (n === 1) {
    return '1'
  }

  const countStrArr = countAndSay(n - 1).split('')
  let resultStr = ''
  let tempCount = 0
  let previousNumber
  
  countStrArr.map(item => {
    if (previousNumber === item) {
      tempCount += 1
    } else {
      if (previousNumber) {
        resultStr += tempCount
        resultStr += previousNumber
      }
      previousNumber = item
      tempCount = 1
    }
  })
  resultStr += tempCount
  resultStr += previousNumber

  return resultStr
}
