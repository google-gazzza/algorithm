// [Easy] 1805. Number of Different Integers in a String
// 1805_number_of_different_integers_in_a_string

// https://leetcode.com/problems/number-of-different-integers-in-a-string
// Runtime: 80 ms, faster than 64.29% of TypeScript online submissions for Number of Different Integers in a String.
// Memory Usage: 41.5 MB, less than 7.14% of TypeScript online submissions for Number of Different Integers in a String.

const removeLeadingZeros = (str: string): string => {
  const strLen: number = str.length
  let endZero: boolean = false
  let resultStr: string = ''
  for (let i: number = 0; i < strLen; i += 1) {
    const char: string = str[i]
    if (endZero === true) {
      resultStr += char
    } else if (char !== '0') {
      endZero = true
      resultStr += char
    }
  }
  return resultStr
}

function numDifferentIntegers(word: string): number {
  const wordLen: number = word.length
  let accStr: string = ''
  const strSet = new Set<string>()
  for (let i: number = 0; i < wordLen; i += 1) {
    const str: string = word[i]
    if (isNaN(Number(str)) === false) {
      accStr += str
    } else {
      if (accStr !== '' && strSet.has(accStr) === false) {
        strSet.add(accStr)
      }
      accStr = ''
    }
  }
  if (accStr !== '' && strSet.has(accStr) === false) {
    strSet.add(accStr)
  }

  return new Set([...strSet].map((str) => removeLeadingZeros(str))).size //?
}

numDifferentIntegers('a123bc34d8ef34') //?
numDifferentIntegers('leet1234code234') //?
numDifferentIntegers('a1b01c001') //?
