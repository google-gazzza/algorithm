// [Medium] 394. Decode String
// 394_decode_string

// https://leetcode.com/problems/decode-string
// Runtime: 72 ms, faster than 90.24% of JavaScript online submissions for Decode String.
// Memory Usage: 38.6 MB, less than 24.94% of JavaScript online submissions for Decode String.

const isNumberStr = (str) => '0123456789'.includes(str)

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (str) {
  const strLen = str.length
  let stack = []
  let currStr = ''
  let currNum = 0
  for (let i = 0; i < strLen; i += 1 || 0) {
    const char = str[i]
    if (char === '[') {
      stack.push(currStr)
      stack.push(currNum)
      currStr = ''
      currNum = 0
    } else if (char === ']') {
      const prevNum = stack.pop()
      const prevStr = stack.pop()
      currStr = prevStr + currStr.repeat(prevNum)
    } else if (isNumberStr(char) === true) {
      currNum = currNum * 10 + Number(char)
    } else {
      currStr += char
    }
  }

  return currStr
}

// decodeString('3[a]2[bc]') //?
decodeString('3[a2[c]]') //?
