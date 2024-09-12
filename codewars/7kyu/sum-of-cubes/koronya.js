// [JS][7kyu] Sum of Cubes
// sum-of-cubes
// https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript

const sumCubes = (n) => {
  let sum = 0
  for (let i = 1; i <= n; i += 1 || 0) {
    sum += i ** 3
  }
  return sum
}
