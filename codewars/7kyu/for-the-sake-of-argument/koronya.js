// [JS][7kyu] For the sake of argument
// for-the-sake-of-argument
// https://www.codewars.com/kata/5258b272e6925db09900386a/train/javascript

function numbers() {
  return [...arguments].every((arg) => typeof arg === 'number')
}

numbers(1, 4, 3, 2, 5) // true
numbers(1, 2, 3, 100) // true
numbers(1, 'a', 3) // false
numbers(1, 3, NaN) // true
