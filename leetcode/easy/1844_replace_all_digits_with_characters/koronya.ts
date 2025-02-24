// [Easy] 1844. Replace All Digits with Characters
// 1844_replace_all_digits_with_characters

// https://leetcode.com/problems/replace-all-digits-with-characters
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Replace All Digits with Characters.
// Memory Usage: 40.4 MB, less than 40.00% of TypeScript online submissions for Replace All Digits with Characters.

const getShiftStr = (prevStr: string, shift: string): string => {
  prevStr.charCodeAt(0)
  return String.fromCharCode(prevStr.charCodeAt(0) + Number(shift))
}

function replaceDigits(s: string): string {
  const sLen: number = s.length
  let prev: string = s[0]
  let result: string = prev
  for (let i: number = 1; i < sLen; i += 1) {
    let str: string = s[i]
    if (i % 2 === 1) {
      result += getShiftStr(prev, str)
    } else {
      prev = str
      result += prev
    }
  }
  return result
}

replaceDigits('a1c1e1') //?
replaceDigits('a1b2c3d4e') //?
