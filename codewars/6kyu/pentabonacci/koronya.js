// [JS][6kyu] Pentabonacci
// pentabonacci
// https://www.codewars.com/kata/55c9172ee4bb15af9000005d/train/javascript

const countOddPentaFib = (n) => {
  let count = 1
  let target = 7
  while (target <= n) {
    if (target % 6 === 1) {
      count += 1
      target += 1
    } else if (target % 6 === 2) {
      count += 1
      target += 5
    }
  }

  return count
}

countOddPentaFib(5) === 1
countOddPentaFib(10) === 3
countOddPentaFib(15) === 5
countOddPentaFib(45) === 15
countOddPentaFib(68) === 23
countOddPentaFib(76) === 25
countOddPentaFib(100) === 33
countOddPentaFib(121) === 40
