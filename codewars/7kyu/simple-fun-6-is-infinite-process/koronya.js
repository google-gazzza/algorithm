// [JS][7kyu] Simple Fun #6: Is Infinite Process?
// simple-fun-6-is-infinite-process
// https://www.codewars.com/kata/588431bb76933b84520000d3/train/javascript

const isInfiniteProcess = (a, b) => {
  if (b - 1 === a || a > b) {
    return true
  }
  if (a === b) {
    return false
  }
  while (a < b) {
    a += 1
    b -= 1
    if (a === b) {
      return false
    }
  }

  return true
}

isInfiniteProcess(2, 6) === false

isInfiniteProcess(2, 3) === true

isInfiniteProcess(2, 10) === false

isInfiniteProcess(0, 1) === true

isInfiniteProcess(3, 1) === true

isInfiniteProcess(10, 10) === false

isInfiniteProcess(5, 10) === true
