// [Easy] 1694. Reformat Phone Number
// 1694_reformat_phone_number

// https://leetcode.com/problems/reformat-phone-number
// Runtime: 84 ms, faster than 80.00% of TypeScript online submissions for Reformat Phone Number.
// Memory Usage: 40.2 MB, less than 50.00% of TypeScript online submissions for Reformat Phone Number.
const excludeArr: string[] = [' ', '-']

const getStr = (arr: string[], start: number, length: number) => {
  const max: number = start + length
  let result = ''
  for (let i: number = start; i < max; i += 1) {
    result += arr[i]
  }
  return result
}

function reformatNumber(number: string): string {
  const numberArr: string[] = number.split('').filter((str) => !excludeArr.includes(str))
  let remainCount: number = numberArr.length
  let index: number = 0
  const resultArr: string[] = []
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
