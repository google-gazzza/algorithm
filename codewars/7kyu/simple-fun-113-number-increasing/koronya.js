// [JS][7kyu] Simple Fun #113: Number Increasing
// simple-fun-113-number-increasing
// https://www.codewars.com/kata/589d1e88e8afb7a85e00004e/train/javascript

const numberIncreasing = (n) => {
  const arr = [1, 6, 3, 9, 8]
  const last = n % 10
  if (arr.includes(last)) {
    return true
  }
  if (last === 4 && n < 10) {
    return false
  }
  arr.push(4)
  if (last === 7 && n < 20) {
    return false
  }
  arr.push(7)

  if (last === 2 && n < 30) {
    return false
  }
  arr.push(2)

  return arr.includes(last)
}

// numberIncreasing(1) === true
// numberIncreasing(2) === false
// numberIncreasing(3) === true
// numberIncreasing(4) === false
// numberIncreasing(5) === false
// numberIncreasing(6) === true
// numberIncreasing(100) === false
// numberIncreasing(101) === true
// numberIncreasing(12345) === false
// numberIncreasing(54321) === true
// numberIncreasing(24) === true
// numberIncreasing(6227) === true
