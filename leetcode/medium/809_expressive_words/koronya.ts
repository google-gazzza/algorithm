// [Medium] 809. Expressive Words
// 809_expressive_words

// https://leetcode.com/problems/expressive-words
// Runtime: 120 ms, faster than 66.67% of TypeScript online submissions for Expressive Words.
// Memory Usage: 47.8 MB, less than 16.67% of TypeScript online submissions for Expressive Words.

const charCodeOfLowerA: number = 'a'.charCodeAt(0)
const charCodeOfLowerZ: number = 'z'.charCodeAt(0)

const isLowerAlphabet = (str: string): boolean => {
  const charCodeOfStr: number = str.charCodeAt(0)
  return charCodeOfStr >= charCodeOfLowerA && charCodeOfStr <= charCodeOfLowerZ
}

const getMatchedString = (s: string): string => {
  let inputStr: string = ''
  const sLen: number = s.length
  let before: string = s[0]
  let sameCount: number = 1
  for (let i: number = 1; i < sLen; i += 1) {
    const str: string = s[i]
    if (before !== str) {
      inputStr += `${before}${sameCount}`
      before = str
      sameCount = 1
    } else {
      sameCount += 1
    }
  }
  inputStr += `${before}${sameCount}`
  return inputStr
}

const getNextInfo = (str: string, index: number): [string, number] => {
  const strLen: number = str.length
  let resultStr: string = str[index]
  let count: number = 1
  if (isLowerAlphabet(resultStr) === true) {
    return [resultStr, count]
  }
  index += 1
  while (index < strLen) {
    const sss: string = str[index]
    if (isLowerAlphabet(sss) === true) {
      break
    }
    resultStr += sss
    index += 1
    count += 1
  }
  return [resultStr, count]
}

const isValid = (a: string, b: string): boolean => {
  const aLen: number = a.length
  const bLen: number = b.length
  let beforeStr: boolean = false
  let aIndex: number = 0
  let bIndex: number = 0
  while (aIndex < aLen && bIndex < bLen) {
    let [targetA, countA] = getNextInfo(a, aIndex)
    let [targetB, countB] = getNextInfo(b, bIndex)
    aIndex += countA
    bIndex += countB
    if (beforeStr === false) {
      if (targetA !== targetB) {
        return false
      }
      beforeStr = true
    } else {
      beforeStr = false
      const numA: number = Number(targetA)
      const numB: number = Number(targetB)
      if (numA !== numB) {
        if (numA <= 2 || numA < numB) {
          return false
        }
      }
    }
  }
  return aIndex >= aLen && bIndex >= bLen
}

function expressiveWords(s: string, words: string[]): number {
  const matchedS: string = getMatchedString(s)
  return words.reduce((acc, cur) => (isValid(matchedS, getMatchedString(cur)) === true ? acc + 1 : acc), 0)
}

// expressiveWords('heeellooo', ['hello', 'hi', 'helo']) //?
// expressiveWords('abcd', ['abc']) //?
// expressiveWords('hello', ['hello', 'hi', 'helo']) //?
// expressiveWords('helo', ['hello', 'hi', 'helo']) //?
