// [Medium] 394. Decode String
// 394_decode_string

// https://leetcode.com/problems/decode-string
// Runtime: 76 ms, faster than 94.44% of TypeScript online submissions for Decode String.
// Memory Usage: 38.9 MB, less than 83.33% of TypeScript online submissions for Decode String.

const isNumberStr = (str: string): boolean => '0123456789'.includes(str)

/**
 * @param {string} s
 * @return {string}
 */
function decodeString(str: string): string {
  const strLen: number = str.length
  let stack: (number | string)[] = []
  let currStr: string = ''
  let currNum: number = 0
  for (let i: number = 0; i < strLen; i += 1) {
    const char: string = str[i]
    if (char === '[') {
      stack.push(currStr)
      stack.push(currNum)
      currStr = ''
      currNum = 0
    } else if (char === ']') {
      // const prevNum = stack.pop()
      const prevNum: number = stack.pop() as number
      const prevStr: string = stack.pop() as string
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
