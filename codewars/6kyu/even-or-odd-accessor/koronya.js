// [JS][6kyu] Even or Odd Accessor
// even-or-odd-accessor
// https://www.codewars.com/kata/6656a4687f3e4eb5fb520817/train/javascript

const evenOrOdd = new Proxy(function () {}, {
  apply(target, thisArg, [value]) {
    return value % 2 === 0 ? 'Even' : 'Odd'
  },
  get(target, prop, receiver) {
    return prop % 2 === 0 ? 'Even' : 'Odd'
  },
})

evenOrOdd[4] === 'Even'
evenOrOdd(2) === 'Even'
evenOrOdd[11] === 'Odd'
evenOrOdd(7) === 'Odd'
evenOrOdd[-44] === 'Even'
evenOrOdd(-42) === 'Even'
evenOrOdd[-9] === 'Odd'
evenOrOdd(-7) === 'Odd'
evenOrOdd[0] === 'Even'
evenOrOdd(0) === 'Even'
