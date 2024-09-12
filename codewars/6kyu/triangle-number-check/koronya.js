// [JS][6kyu] Triangle number check
// triangle-number-check
// https://www.codewars.com/kata/557e8a141ca1f4caa70000a6/train/javascript

// 3, 6, 10, 15, 21, 28, 36, 45, ...

const getNthValue = (n) => (n ** 2 + 3 * n + 2) / 2

const isTriangleNumber = (number) => {
  if (isNaN(number) === true || number < 0) {
    return false
  }
  if (number === 0 || number === 1) {
    return true
  }

  let prev = 0
  while (prev < number) {
    prev += 1
    const nthValue = getNthValue(prev)
    if (nthValue === number) {
      return true
    }
    if (nthValue > number) {
      return false
    }
  }
}

isTriangleNumber(0)
isTriangleNumber(1)
isTriangleNumber(3) === true
isTriangleNumber(5) === false
isTriangleNumber('hello!') === false
isTriangleNumber(6.15) === false
