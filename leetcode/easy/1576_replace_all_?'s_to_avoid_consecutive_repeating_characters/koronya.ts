// [Easy] 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
// 1576_replace_all_?'s_to_avoid_consecutive_repeating_characters

// https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.
// Memory Usage: 40.6 MB, less than 77.27% of TypeScript online submissions for Replace All ?'s to Avoid Consecutive Repeating Characters.

const CHAR_CODE_OF_A: number = 'a'.charCodeAt(0)
const LENGTH_OF_ALPHABET: number = 26

const getRandomCharExceptCharArr = (charArr: string[]): string => {
  let randomChar: string = ''
  while (randomChar === '' || charArr.includes(randomChar) === true) {
    randomChar = String.fromCharCode(Math.floor(Math.random() * LENGTH_OF_ALPHABET) + CHAR_CODE_OF_A)
  }
  return randomChar
}

function modifyString(s: string): string {
  const sLen: number = s.length
  let result: string = ''
  let before: string = ''
  for (let i: number = 0; i < sLen; i += 1) {
    const str: string = s[i]
    if (str !== '?') {
      result += str
      before = str
    } else {
      if (i !== sLen - 1) {
        const next = s[i + 1]
        const now = getRandomCharExceptCharArr([before, next])
        result += now
        before = now
      } else {
        result += getRandomCharExceptCharArr([before])
      }
    }
  }

  return result
}

modifyString('?zs') //?
modifyString('ubv?w') //?
modifyString('j?qg??b') //?
modifyString('??yw?ipkj?') //?
