// [JS][6kyu] Your order, please
// your-order-please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

const getNumber = (str) => {
  for (let i = 1; i <= 9; i += 1 || 0) {
    if (str.includes(String(i))) {
      return i
    }
  }
}

const order = (words) =>
  words
    .split(' ')
    .map((item) => [item, getNumber(item)])
    .sort((a, b) => a[1] - b[1])
    .map((item) => item[0])
    .join(' ')

order('is2 Thi1s T4est 3a')
order('')
