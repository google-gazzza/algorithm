// [JS][6kyu] Function Composition
// function-composition
// https://www.codewars.com/kata/5421c6a2dda52688f6000af8/train/javascript

// prettier-ignore
const compose = (f, g) => (...args) => f(g(...args))

function compose2(f, g) {
  return function () {
    return f(g(...arguments))
  }
}

const add = function (a) {
  return a + 1
}
const id = function (a) {
  return a
}

compose(add, id)(0)

const add1 = function (a) {
  return a + 1
}
const addAll3 = function (a, b, c) {
  return a + b + c
}

compose(add1, addAll3)(1, 2, 3)
