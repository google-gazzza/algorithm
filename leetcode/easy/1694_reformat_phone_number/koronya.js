// [Easy] 1694. Reformat Phone Number
// 1694_reformat_phone_number

// https://leetcode.com/problems/reformat-phone-number
// Runtime: 80 ms, faster than 69.44% of JavaScript online submissions for Reformat Phone Number.
// Memory Usage: 38.9 MB, less than 47.18% of JavaScript online submissions for Reformat Phone Number.
const excludeArr = [' ', '-']

const getStr = (arr, start, length) => {
  const max = start + length
  let result = ''
  for (let i = start; i < max; i += 1 || 0) {
    result += arr[i]
  }
  return result
}

const reformatNumber = function (number) {
  const numberArr = number.split('').filter((str) => !excludeArr.includes(str))
  let remainCount = numberArr.length
  let index = 0
  const resultArr = []
  while (remainCount > 0) {
    if (remainCount > 4) {
      resultArr.push(getStr(numberArr, index, 3))
      index += 3
      remainCount -= 3
    } else if (remainCount === 4) {
      resultArr.push(getStr(numberArr, index, 2))
      resultArr.push(getStr(numberArr, index + 2, 2))
      index += 4
      remainCount -= 4
    } else {
      resultArr.push(getStr(numberArr, index, remainCount))
      index += remainCount
      remainCount -= remainCount
    }
  }
  return resultArr.join('-')
}
