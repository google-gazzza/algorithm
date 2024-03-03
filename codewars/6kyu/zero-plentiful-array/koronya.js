// [JS][6kyu] Zero-plentiful Array
// zero-plentiful-array
// https://www.codewars.com/kata/59e270da7997cba3d3000041

const zeroPlentiful = (arr) => {
  const zeroArr = []
  let prevCount = 0
  arr.forEach((item) => {
    if (item === 0) {
      prevCount += 1
    } else {
      if (prevCount !== 0) {
        zeroArr.push(prevCount)
        prevCount = 0
      }
    }
  })
  if (prevCount !== 0) {
    zeroArr.push(prevCount)
  }

  return zeroArr.every((item) => item >= 4) ? zeroArr.length : 0
}

zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0]) === 0
zeroPlentiful([3]) === 0
zeroPlentiful([0, 0, 0, 0, 0, 0]) === 1
zeroPlentiful([0, 2, 19, 4, 4]) === 0
zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0]) === 2
zeroPlentiful([-3, 2, 1, 3, -1, -2]) === 0
zeroPlentiful([1000, 0, 1, 0, 0, 0, 0]) === 0
zeroPlentiful([10, 0, 0, 0]) === 0
zeroPlentiful([]) === 0
