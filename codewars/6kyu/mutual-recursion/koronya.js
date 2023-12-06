// [JS][6kyu] Mutual Recursion
// mutual-recursion
// https://www.codewars.com/kata/53a1eac7e0afd3ad3300008b/train/javascript

const F = (n) => {
  if (n === 0) {
    return 1
  }
  return n - M(F(n - 1))
}

const M = (n) => {
  if (n === 0) {
    return 0
  }
  return n - F(M(n - 1))
}

F(0) === 1
M(0) === 0
F(7) === 5
M(7) === 4
