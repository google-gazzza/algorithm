// [Easy] 1165. Single-Row Keyboard
// 1165_single-row_keyboard

// https://leetcode.com/problems/single-row-keyboard
// Runtime: 84 ms, faster than 66.67% of TypeScript online submissions for Single-Row Keyboard.
// Memory Usage: 43.4 MB, less than 33.33% of TypeScript online submissions for Single-Row Keyboard.

const getDistance = (a: number, b: number): number => Math.abs(a - b)

function calculateTime(keyboard: string, word: string): number {
  let result: number = 0
  const findIndex = (str: string): number => keyboard.indexOf(str)
  const arr: number[] = word.split('').map((str) => findIndex(str))
  arr.unshift(0)
  const arrLen = arr.length
  for (let i: number = 0; i < arrLen - 1; i += 1) {
    result += getDistance(arr[i], arr[i + 1])
  }

  return result
}

calculateTime('abcdefghijklmnopqrstuvwxyz', 'cba') //?
calculateTime('pqrstuvwxyzabcdefghijklmno', 'leetcode') //?
