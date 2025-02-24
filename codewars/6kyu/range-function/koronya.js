// [JS][6kyu] Range function
// range-function
// https://www.codewars.com/kata/584ebd7a044a1520f20000d5/train/javascript

function* range() {
  const argumentsLength = arguments.length
  let diff = 1
  let start = 1
  let end = 1
  if (argumentsLength === 3) {
    start = arguments[0]
    diff = arguments[1]
    end = arguments[2]
  } else if (argumentsLength === 2) {
    start = arguments[0]
    end = arguments[1]
  } else {
    end = arguments[0]
  }

  for (let i = start; i <= end; i += diff) {
    yield i
  }
}

Array.from(range(5))
Array.from(range(3, 7))
Array.from(range(2, 3, 15))
