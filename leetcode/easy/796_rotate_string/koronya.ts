// [Easy] 796. Rotate String
// 796_rotate_string

// https://leetcode.com/problems/rotate-string
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Rotate String.
// Memory Usage: 40.2 MB, less than 75.00% of TypeScript online submissions for Rotate String.

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

const convertStr = (str: string): string => str.slice(1) + str[0]

function rotateString(A: string, B: string): boolean {
  if (A === B) {
    return true
  }
  const ALen: number = A.length
  let adjustB: string = B
  let count: number = 0
  while (count < ALen) {
    if (A === adjustB) {
      return true
    }
    adjustB = convertStr(adjustB)
    count += 1
  }

  return false
}

rotateString('abcde', 'cdeab') //?
rotateString('abcde', 'abced') //?
