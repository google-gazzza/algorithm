// [Easy] 604. Design Compressed String Iterator
// 604_design_compressed_string_iterator

// https://leetcode.com/problems/design-compressed-string-iterator
// Runtime: 85 ms, faster than 60.00% of TypeScript online submissions for Design Compressed String Iterator.
// Memory Usage: 47.4 MB, less than 80.00% of TypeScript online submissions for Design Compressed String Iterator.

const CHARCODE_OF_0 = '0'.charCodeAt(0)
const CHARCODE_OF_9 = '9'.charCodeAt(0)

const isNumberStr = (str: string): boolean => {
  const charCode = str.charCodeAt(0)
  return CHARCODE_OF_0 <= charCode && charCode <= CHARCODE_OF_9
}

class StringIterator {
  strIndex: number
  countIndex: number
  strArr: string[]
  countArr: number[]
  constructor(compressedString: string) {
    const strLen = compressedString.length
    let repeatStr = compressedString[0]
    let repeatCount = ''
    const strArr = []
    const countArr = []
    for (let i: number = 1; i < strLen; i += 1) {
      const str = compressedString[i]
      if (isNumberStr(str) === true) {
        repeatCount += str
      } else {
        strArr.push(repeatStr)
        countArr.push(repeatCount)
        repeatStr = str
        repeatCount = ''
      }
    }
    strArr.push(repeatStr)
    countArr.push(repeatCount)

    this.strIndex = 0
    this.countIndex = 0
    this.strArr = strArr
    this.countArr = countArr.map((item) => Number(item))
  }

  next(): string {
    if (this.hasNext() === false) {
      return ' '
    }
    const result = this.strArr[this.strIndex]
    if (this.countIndex === this.countArr[this.strIndex] - 1) {
      this.strIndex += 1
      this.countIndex = 0
    } else {
      this.countIndex += 1
    }

    return result
  }

  hasNext(): boolean {
    if (this.strIndex === this.strArr.length) {
      return false
    }
    return true
  }
}
