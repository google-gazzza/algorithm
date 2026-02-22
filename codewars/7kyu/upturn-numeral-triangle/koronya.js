// [JS][7kyu] Upturn Numeral Triangle
// upturn-numeral-triangle
// https://www.codewars.com/kata/564f3d49a06556d27c000077/train/javascript

const pattern = (n) => {
  const result = []
  for (let i = 1; i <= n; i += 1) {
    const spaces = ' '.repeat(i)
    const numbers = `${i % 10} `.repeat(n - i + 1).trim()
    result.push(spaces + numbers)
  }
  return result.join('\n')
}

// pattern(7) === ' 1 1 1 1 1 1 1\n  2 2 2 2 2 2\n   3 3 3 3 3\n    4 4 4 4\n     5 5 5\n      6 6\n       7'
// pattern(12) ===
//   ' 1 1 1 1 1 1 1 1 1 1 1 1\n  2 2 2 2 2 2 2 2 2 2 2\n   3 3 3 3 3 3 3 3 3 3\n    4 4 4 4 4 4 4 4 4\n     5 5 5 5 5 5 5 5\n      6 6 6 6 6 6 6\n       7 7 7 7 7 7\n        8 8 8 8 8\n         9 9 9 9\n          0 0 0\n           1 1\n            2'
