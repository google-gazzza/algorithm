// [JS][7kyu] Broken Collatz
// broken-collatz
// https://www.codewars.com/kata/57e8c68c97a05990b10000c3/train/javascript

const collatz = (n, count = 0) => {
  if (n === 1) {
    return count + 1
  }
  const nextN = n % 2 === 0 ? n / 2 : n * 3 + 1
  return collatz(nextN, count + 1)
}

collatz(2) === 2
collatz(4) === 3
collatz(6) === 9
