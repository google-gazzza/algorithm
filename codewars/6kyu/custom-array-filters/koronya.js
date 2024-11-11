// [JS][6kyu] Custom Array Filters
// custom-array-filters
// https://www.codewars.com/kata/53fc954904a45eda6b00097f/train/javascript

const getRemainder = (num) => Math.abs(num) % 2
const validFilter = (num) => {
  if (typeof num !== 'number') {
    return false
  }
  const remainder = getRemainder(num)
  return remainder === 0 || remainder === 1
}

Array.prototype.even = function () {
  return this.filter(validFilter).filter((num) => getRemainder(num) === 0)
}

Array.prototype.odd = function () {
  return this.filter(validFilter).filter((num) => getRemainder(num) !== 0)
}

Array.prototype.under = function (x) {
  return this.filter(validFilter).filter((num) => num < x)
}

Array.prototype.over = function (x) {
  return this.filter(validFilter).filter((num) => num > x)
}

Array.prototype.inRange = function (min, max) {
  return this.filter(validFilter).filter((num) => num >= min && num <= max)
}

// ;[1, 2, 3, 4, 5].even()
// ;[1, 2, 3, 4, 5].odd()
// ;[1, 2, 3, 4, 5].under(4)
// ;[1, 2, 3, 4, 5].over(4)
// ;[1, 2, 3, 4, 5].inRange(1, 3)
// ;[1, 2, 18, 19, 20, 21, 22, 30, 40, 50, 100].even().inRange(18, 30)
// ;['a', 1, 'b', 300, 'x', 'q', 63, 122, 181, 'z', 0.83, 0.11].even()
// ;[21, 23, 12.01, 1.2, '9', -2, 123.2, 'b', 0.1, 'c', 'a', '0', '1', -5].over(-7)
// ;[-2, 'c', 'b', 12.01, '1', 'a', 5, -5, 1, 25, 3, 29, 0, 0.1, 123.2, 27, 21, 1.2, 23, '0', 6, 4, 2, '9'].under(7)
