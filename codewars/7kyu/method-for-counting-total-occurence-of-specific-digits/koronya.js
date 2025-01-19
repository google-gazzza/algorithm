// [JS][7kyu] Method For Counting Total Occurence Of Specific Digits
// method-for-counting-total-occurence-of-specific-digits
// https://www.codewars.com/kata/56311e4fdd811616810000ce/train/javascript

function List() {
  this.countSpecDigits = function (integersList, digitsList) {
    const result = digitsList.map((digit) => {
      const count = integersList
        .join('')
        .split('')
        .filter((int) => int === String(digit)).length
      return [digit, count]
    })
    return result
  }
}

const l = new List()

const integersList = [1, 1, 2, 3, 1, 2, 3, 4]
const digitList = [1, 3]

l.countSpecDigits(integersList, digitList)
