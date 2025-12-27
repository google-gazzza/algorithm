// [JS][7kyu] Last
// last
// https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript

function last() {
  const argumentsLength = arguments.length
  if (argumentsLength === 1) {
    if (typeof arguments[0] === 'string') {
      return arguments[0].slice(-1)
    }
    if (arguments[0] instanceof Array) {
      return arguments[0][arguments[0].length - 1]
    }
  }

  return arguments[arguments.length - 1]
}

last(5) === 5
last([1, 2, 3, 4]) === 4
last('xyz') === 'z'
last(1, 2, 3, 4) === 4
last([1, 2], [3, 4])
last([
  [1, 2],
  [3, 4],
])
