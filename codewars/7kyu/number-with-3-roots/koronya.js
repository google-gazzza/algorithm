// [JS][7kyu] number with 3 roots
// number-with-3-roots
// https://www.codewars.com/kata/5932c94f6aa4d1d786000028/train/javascript

const isInteger = (n) => n % 1 === 0

const perfectRoots = (n) => {
  let count = 0
  while (count < 3) {
    n = Math.sqrt(n)
    if (!isInteger(n)) {
      return false
    }
    count += 1
  }
  return true
}

perfectRoots(256) === true
perfectRoots(1000) === false
perfectRoots(6561) === true
