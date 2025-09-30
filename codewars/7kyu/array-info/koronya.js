// [JS][7kyu] Array Info
// array-info
// https://www.codewars.com/kata/57f12b4d5f2f22651c00256d/train/javascript

const transformData = (length) => (length === 0 ? [null] : [length])

const arrayInfo = (arr) => {
  const arrLength = arr.length
  const integerLength = arr.filter((v) => Number.isInteger(v)).length
  const floatLength = arr.filter((v) => typeof v === 'number' && !Number.isInteger(v)).length
  const stringLength = arr.filter((v) => typeof v === 'string' && v.trim() !== '').length
  const whitespaceLength = arr.filter((v) => typeof v === 'string' && v.trim() === '').length
  if (arrLength === 0 && integerLength === 0 && floatLength === 0 && stringLength === 0 && whitespaceLength === 0) {
    return 'Nothing in the array!'
  }
  return [transformData(arrLength), transformData(integerLength), transformData(floatLength), transformData(stringLength), transformData(whitespaceLength)]
}

arrayInfo([1, 2, 3.33, 4, 5.01, 'bass', 'kick', ' '])
arrayInfo([0.001, 2, ' '])
arrayInfo([])
arrayInfo([' '])
arrayInfo([{}])
arrayInfo([' ', ' '])
arrayInfo(['jazz'])
arrayInfo([4])
arrayInfo([3.1416])
arrayInfo([4])
arrayInfo([11, 22, 33.33, 44.44, 'hasan', 'ahmad'])
arrayInfo(['a', 'b', 'c', 'd', ' '])
arrayInfo([1, 2, 3, 4, 5, 6, 7, 8, 9])
arrayInfo([1, 2.23, 'string', ' '])
arrayInfo([' ', ' '])
