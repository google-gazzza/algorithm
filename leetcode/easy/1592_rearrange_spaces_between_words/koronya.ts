// [Easy] 1592. Rearrange Spaces Between Words
// 1592_rearrange_spaces_between_words

// https://leetcode.com/problems/rearrange-spaces-between-words
// Runtime: 84 ms, faster than 85.71% of TypeScript online submissions for Rearrange Spaces Between Words.
// Memory Usage: 39.3 MB, less than 71.43% of TypeScript online submissions for Rearrange Spaces Between Words.

const getRepeatedSpaces = (n: number): string => Array(n).fill(' ').join('')

/**
 * @param {string} text
 * @return {string}
 */
function reorderSpaces(text: string): string {
  const textLen: number = text.length
  let spaceLen: number = 0
  let str: string = ''
  const wordsArr: string[] = []
  for (let i: number = 0; i < textLen; i += 1) {
    if (text[i] === ' ') {
      spaceLen += 1
      if (str !== '') {
        wordsArr.push(str)
        str = ''
      }
    } else {
      str += text[i]
    }
  }
  if (str !== '') {
    wordsArr.push(str)
  }

  const limit: number = wordsArr.length - 1
  if (limit === 0) {
    return wordsArr[0] + getRepeatedSpaces(spaceLen)
  }

  const equalSpaceLen: number = Math.floor(spaceLen / limit)
  const remainder: number = spaceLen % limit
  const equalSpaceStr: string = getRepeatedSpaces(equalSpaceLen)
  let resultStr: string = ''
  for (let i: number = 0; i < limit; i += 1) {
    resultStr += wordsArr[i]
    resultStr += equalSpaceStr
  }
  resultStr += wordsArr[limit]
  if (remainder !== 0) {
    resultStr += getRepeatedSpaces(remainder)
  }

  return resultStr
}

reorderSpaces('  this   is  a sentence ') //?
reorderSpaces(' practice   makes   perfect') //?
reorderSpaces('hello   world') //?
reorderSpaces('  walks  udp package   into  bar a') //?
reorderSpaces('  hello') //?
