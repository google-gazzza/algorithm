// [Easy] 1427. Perform String Shifts
// 1427_perform_string_shifts

// https://leetcode.com/problems/perform-string-shifts/
// Runtime: 138 ms, faster than 100.00% of TypeScript online submissions for Perform String Shifts.
// Memory Usage: 40.7 MB, less than 100.00% of TypeScript online submissions for Perform String Shifts.

const rotateStr = (str: string, num: number, isLeft: boolean = false) => {
  const strLen: number = str.length
  if (num >= strLen) {
    num %= strLen
  }
  if (isLeft === false) {
    const index: number = strLen - num
    const prev: string = str.substr(0, index)
    const next: string = str.substr(index)
    return next + prev
  }
  return str.substr(num) + str.substr(0, num)
}

function stringShift(s: string, shift: number[][]): string {
  let result: string = s
  shift.forEach((item) => {
    const [key, value] = item
    result = rotateStr(result, value, key === 0)
  })
  return result
}

stringShift('abc', [
  [0, 1],
  [1, 2],
]) //?
stringShift('abcdefg', [
  [1, 1],
  [1, 1],
  [0, 2],
  [1, 3],
]) //?

stringShift('abc', [[0, 4]]) //?
stringShift('mecsk', [
  [1, 15],
  [0, 10],
  [0, 13],
  [1, 24],
  [1, 31],
]) //?
