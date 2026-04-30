// [JS][6kyu] Function iteration
// function-iteration
// https://www.codewars.com/kata/54b679eaac3d54e6ca0008c9/train/javascript

const createIterator = function (func, n) {
  return function (input) {
    let result = input
    for (let i = 0; i < n; i += 1 || 0) {
      result = func(result)
    }
    return result
  }
}

const getDouble = function (n) {
  return n + n
}

const doubleIterator = createIterator(getDouble, 1)

doubleIterator(3) === 6

const getQuadruple = createIterator(getDouble, 2)
getQuadruple(2) === 8
