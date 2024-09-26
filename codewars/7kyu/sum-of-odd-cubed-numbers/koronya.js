// [JS][7kyu] Sum of Odd Cubed Numbers
// sum-of-odd-cubed-numbers
// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript

const cubeOdd = (arr) => {
  if (arr.some((item) => typeof item !== 'number')) {
    return undefined
  }
  return arr
    .filter((num) => num % 2 !== 0)
    .map((v) => v ** 3)
    .reduce((acc, cur) => acc + cur, 0)
}

cubeOdd([1, 2, 3, 4]) === 28
cubeOdd([-3, -2, 2, 3]) === 0
cubeOdd(['a', 12, 9, 'z', 42]) === undefined
