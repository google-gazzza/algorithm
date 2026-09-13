// [JS][7kyu] GCD sum
// gcd-sum
// https://www.codewars.com/kata/5dd259444228280032b1ed2a/train/javascript

const solve = (s, g) => {
  const common = s / g
  if (common % 1 !== 0) {
    return -1
  }
  return [g * 1, g * (common - 1)]
}

solve(6, 3)
solve(8, 2)
solve(10, 3)
solve(12, 4)
solve(12, 5)
