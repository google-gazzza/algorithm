// [JS][7kyu] Collatz Conjecture Length
// collatz-conjecture-length
// https://www.codewars.com/kata/54fb963d3fe32351f2000102/train/javascript

const collatz = (n) => {
  let count = 1
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1
    count += 1
  }
  return count
}

collatz(20) === 8
collatz(15) === 18
