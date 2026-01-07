// [JS][7kyu] Is n divisible by (...)?
// is-n-divisible-by
// https://www.codewars.com/kata/558ee8415872565824000007/train/javascript

function isDivisible() {
  const [first, ...rest] = arguments
  return rest.every((item) => first % item === 0)
}

isDivisible(3, 3, 4) === false
isDivisible(12, 3, 4) === true
isDivisible(8, 3, 4, 2, 5) === false
