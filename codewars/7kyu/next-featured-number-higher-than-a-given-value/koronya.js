// [JS][7kyu] Next Featured Number Higher than a Given Value
// next-featured-number-higher-than-a-given-value
// https://www.codewars.com/kata/56abc5e63c91630882000057/train/javascript

const getNextThreeMultiple = (num) => {
  const remainder = num % 3
  return remainder === 0 ? num + 3 : num + (3 - remainder)
}

const isOneDigit = (num) => {
  const numStr = num.toString().split('')
  const digitSet = new Set(numStr)
  return digitSet.size === numStr.length
}

const nextNumb = (val) => {
  let nextNumber = val % 2 === 0 ? val + 1 : val + 2
  let isMultipleOf3 = nextNumber % 3 === 0
  if (!isMultipleOf3) {
    nextNumber = getNextThreeMultiple(nextNumber)
    if (nextNumber % 2 === 0) {
      nextNumber += 3
    }
  }

  while (nextNumber <= 9876543210) {
    if (isOneDigit(nextNumber)) {
      return nextNumber
    }
    nextNumber += 6
  }
  return 'There is no possible number that fulfills those requirements'
}

nextNumb(12) === 15
nextNumb(13) === 15
nextNumb(99) === 105
nextNumb(999999) === 1023459
nextNumb(9999999999)
