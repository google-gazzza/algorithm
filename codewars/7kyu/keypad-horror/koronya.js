// [JS][7kyu] Keypad horror
// keypad-horror
// https://www.codewars.com/kata/5572392fee5b0180480001ae/train/javascript

const convertMap = {
  1: '7',
  2: '8',
  3: '9',
  4: '4',
  5: '5',
  6: '6',
  7: '1',
  8: '2',
  9: '3',
}

const computerToPhone = (numbers) =>
  numbers
    .split('')
    .map((str) => convertMap[str] || str)
    .join('')

computerToPhone('0789456123') === '0123456789'
computerToPhone('000') === '000'
computerToPhone('94561') === '34567'
computerToPhone('') === ''
