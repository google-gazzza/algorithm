// https://leetcode.com/problems/plus-one/submissions/
// Runtime: 52 ms, faster than 85.42% of JavaScript online submissions for Plus One.
// Memory Usage: 33.7 MB, less than 93.62% of JavaScript online submissions for Plus One.
const plusOne = digits => {
  const lastIndexOfDigits = digits.length - 1
  const reverseArr = []
  let upFlag = true
  const addWithPlusOne = num => {
    if (num === 9) {
      upFlag = true
      reverseArr.push(0)
    } else {
      upFlag = false
      reverseArr.push(num + 1)
    }
  }
  const checkAndAdd = num => {
    if (upFlag) {
      addWithPlusOne(num)
    } else {
      reverseArr.push(num)
    }
  }

  for (let i = lastIndexOfDigits; i >= 0; i -= 1) {
    const item = digits[i]
    checkAndAdd(item)
  }
  if (upFlag) {
    reverseArr.push(1)
  }

  return reverseArr.reverse()
}
