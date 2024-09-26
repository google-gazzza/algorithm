// [JS][6kyu] Array Helpers
// array-helpers
// https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript

Array.prototype.square = function () {
  return this.map((v) => v * v)
}

Array.prototype.cube = function () {
  return this.map((v) => v * v * v)
}

Array.prototype.sum = function () {
  return this.reduce((acc, cur) => acc + cur, 0)
}

Array.prototype.average = function () {
  return this.sum() / this.length
}

Array.prototype.even = function () {
  return this.filter((v) => v % 2 === 0)
}

Array.prototype.odd = function () {
  return this.filter((v) => v % 2 !== 0)
}

const numbers = [1, 2, 3, 4, 5]
numbers.square()
numbers.cube()
numbers.sum()
numbers.average()
numbers.even()
numbers.odd()
