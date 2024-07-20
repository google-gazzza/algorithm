// [JS][7kyu] A Rule of Divisibility by 7
// a-rule-of-divisibility-by-7
// https://www.codewars.com/kata/55e6f5e58f7817808e00002e/train/javascript

const seven = (m) => {
  let count = 0
  while (m > 99) {
    m = Math.floor(m / 10) - 2 * (m % 10)
    count += 1
  }
  return [m, count]
}

seven(1021)
seven(1603)
seven(371)
seven(483)
seven(477557101)
