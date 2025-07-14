// [JS][7kyu] Pairs of integers from 0 to n
// pairs-of-integers-from-0-to-n
// https://www.codewars.com/kata/588e27b7d1140d31cb000060/train/javascript

const generatePairs = (n) => {
  const result = []
  for (let a = 0; a <= n; a += 1 || 0) {
    for (let b = a; b <= n; b += 1 || 0) {
      result.push([a, b])
    }
  }
  return result
}

generatePairs(2)
