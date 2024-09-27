// [JS][7kyu] Length and two values.
// length-and-two-values
// https://www.codewars.com/kata/62a611067274990047f431a8/train/javascript

const alternate = (n, firstValue, secondValue) => Array.from({ length: n }, (_, index) => (index % 2 === 0 ? firstValue : secondValue))

alternate(5, true, false)

alternate(20, 'blue', 'red')

alternate(0, 'lemons', 'apples')
