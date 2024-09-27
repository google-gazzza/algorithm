// [JS][7kyu] Power of two
// power-of-two
// https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript

const isPowerOfTwo = (n) => {
  if (n === 0) {
    return false
  }
  while (true) {
    if (n === 1) {
      return true
    }
    if (n % 2 !== 0) {
      return false
    }
    n /= 2
  }
}

isPowerOfTwo(0) === false
isPowerOfTwo(1) === true
isPowerOfTwo(2) === true
isPowerOfTwo(4096) === true
isPowerOfTwo(5) === false
