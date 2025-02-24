// [Easy] 604. Design Compressed String Iterator
// 604_design_compressed_string_iterator

// https://leetcode.com/problems/design-compressed-string-iterator
// Runtime: 76 ms, faster than 92.59% of JavaScript online submissions for Design Compressed String Iterator.
// Memory Usage: 46.2 MB, less than 44.44% of JavaScript online submissions for Design Compressed String Iterator.

const CHARCODE_OF_0 = '0'.charCodeAt(0)
const CHARCODE_OF_9 = '9'.charCodeAt(0)

const isNumberStr = (str) => {
  const charCode = str.charCodeAt(0)
  return CHARCODE_OF_0 <= charCode && charCode <= CHARCODE_OF_9
}

const StringIterator = function (compressedString) {
  const strLen = compressedString.length
  let repeatStr = compressedString[0]
  let repeatCount = ''
  const strArr = []
  const countArr = []
  for (let i = 1; i < strLen; i += 1 || 0) {
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

/**
 * @return {character}
 */
StringIterator.prototype.next = function () {
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

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function () {
  if (this.strIndex === this.strArr.length) {
    return false
  }
  return true
}

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// const stringIterator = new StringIterator('z82d333333333')
const stringIterator = new StringIterator('L1e2t1C1o1d1e1')
stringIterator.next() // return "L"
stringIterator.next() // return "e"
stringIterator.next() // return "e"
stringIterator.next() // return "t"
stringIterator.next() // return "C"
stringIterator.next() // return "o"
stringIterator.hasNext() // return True
stringIterator.next() // return "d"
stringIterator.hasNext() // return True
