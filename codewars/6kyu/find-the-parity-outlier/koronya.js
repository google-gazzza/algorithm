// [JS][6kyu] Find The Parity Outlier
// find-the-parity-outlier
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

const isEven = (num) => num % 2 === 0

const findOutlier = (integers) => {
  const integersLen = integers.length
  let firstResult = isEven(integers[0])
  let secondResult = isEven(integers[1])
  if (firstResult !== secondResult) {
    return secondResult === isEven(integers[2]) ? integers[0] : integers[1]
  }

  for (let i = 2; i < integersLen; i += 1 || 0) {
    const num = integers[i]
    if (isEven(num) !== firstResult) {
      return num
    }
  }
}

findOutlier([0, 1, 2])
findOutlier([1, 2, 3])
findOutlier([2, 6, 8, 10, 3])
findOutlier([0, 0, 3, 0, 0])
findOutlier([1, 1, 0, 1, 1])
