// [JS][5kyu] ISBN-10 Validation
// isbn-10-validation
// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/javascript

const validISBN10 = (isbn) => {
  const isbnArr = isbn.split('')
  const isbnArrLen = isbnArr.length
  if (isbnArrLen !== 10) {
    return false
  }
  const sum = isbnArr.reduce((acc, cur, index) => (cur === 'X' && index === isbnArrLen - 1 ? acc + 100 : acc + cur * (index + 1)), 0)
  return sum % 11 === 0
}
