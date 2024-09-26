// [JS][7kyu] last digits of a number
// last-digits-of-a-number
// https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0/train/javascript

const lastDigit = (n, d) => {
  if (d <= 0) {
    return []
  }
  return n.toString().slice(-d).split('').map(Number)
}

lastDigit(1, 1)
lastDigit(123767, 4)
lastDigit(0, 1)
lastDigit(34625647867585, 10)
lastDigit(1234, 0)
lastDigit(24134, -4)
lastDigit(1343, 5)
