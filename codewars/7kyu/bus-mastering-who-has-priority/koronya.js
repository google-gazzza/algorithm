// [JS][7kyu] Bus mastering - Who has priority ?
// bus-mastering-who-has-priority
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c/train/javascript

const arbitrate = (input, n) => {
  const arr = input.split('')
  const findIndex = arr.indexOf('1')
  if (findIndex === -1 || findIndex >= n) {
    return input
  }
  return arr
    .map((_, index) => {
      return index === findIndex ? '1' : '0'
    })
    .join('')
}

arbitrate('001000101', 9)
arbitrate('001000101', 9) === '001000000'
arbitrate('000000101', 9) === '000000100'
arbitrate('0000', 4) === '0000'
