// [JS][7kyu] Find the nth Digit of a Number
// find-the-nth-digit-of-a-number
// https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript

const findDigit = (num, nth) => {
  if (nth <= 0) {
    return -1
  }
  const str = String(Math.abs(num))
  return nth > str.length ? 0 : Number(str[str.length - nth])
}

findDigit(5673, 4) === 5
findDigit(129, 2) === 2
findDigit(-2825, 3) === 8
findDigit(-456, 4) === 0
findDigit(0, 20) === 0
findDigit(65, 0) === -1
findDigit(24, -8) === -1
