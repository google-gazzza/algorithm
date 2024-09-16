// [Easy] 1592. Rearrange Spaces Between Words
// 1592_rearrange_spaces_between_words

// https://leetcode.com/problems/rearrange-spaces-between-words
// Runtime: 76 ms, faster than 84.26% of JavaScript online submissions for Rearrange Spaces Between Words.
// Memory Usage: 38.8 MB, less than 49.07% of JavaScript online submissions for Rearrange Spaces Between Words.

const getRepeatedSpaces = (n) => Array(n).fill(' ').join('')

/**
 * @param {string} text
 * @return {string}
 */
const reorderSpaces = function (text) {
  const textLen = text.length
  let spaceLen = 0
  let str = ''
  const wordsArr = []
  for (let i = 0; i < textLen; i += 1 || 0) {
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

  const limit = wordsArr.length - 1
  if (limit === 0) {
    return wordsArr[0] + getRepeatedSpaces(spaceLen)
  }

  const equalSpaceLen = Math.floor(spaceLen / limit)
  const remainder = spaceLen % limit
  const equalSpaceStr = getRepeatedSpaces(equalSpaceLen)
  let resultStr = ''
  for (let i = 0; i < limit; i += 1 || 0) {
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
