// https://leetcode.com/problems/plus-one
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

// 원래는 이 방식으로 풀었는데, JS에서 Numbrer.MAX_SAFE_INTEGER가 넘어가면 오류가 남 ㅜㅜ
const plusOne2 = digits => {
  const str = digits.reduce((acc, cur) => acc + cur, "")
  const num = Number(str) + 1
  const isOverMaxValue = Number.MAX_VALUE < Number(str)
  const isOverSafeInteger = Number.MAX_SAFE_INTEGER < Number(str)
  console.log('isOverMaxValue: ', isOverMaxValue);
  console.log('isOverSafeInteger: ', isOverSafeInteger);
  return (num + "").split("")
}

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])// 정상값 출력
plusOne2([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])// 오류 발생
