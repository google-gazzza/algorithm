// [JS][7kyu] How many twos?
// how-many-twos
// https://www.codewars.com/kata/56aed5db9d5cb55de000001c/train/javascript

const twoCount = (n) => {
  let count = 0
  while (n % 2 === 0) {
    n /= 2
    count += 1
  }
  return count
}

twoCount(24) === 3
twoCount(17280) === 7
twoCount(222222222222) === 1
twoCount(256) === 8
twoCount(1) === 0
twoCount(2) === 1
twoCount(256) === 8
twoCount(7) === 0
twoCount(84934656) === 20
