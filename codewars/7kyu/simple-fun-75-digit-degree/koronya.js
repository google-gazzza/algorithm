// [JS][7kyu] Simple Fun #75: Digit Degree
// simple-fun-75-digit-degree
// https://www.codewars.com/kata/589422431a88082ea600002a/train/javascript

const getSum = (n) => {
  return n
    .toString()
    .split('')
    .reduce((acc, curr) => acc + Number(curr), 0)
}

const digitDegree = (n) => {
  if (n < 10) {
    return 0
  }
  let count = 1
  let degree = getSum(n)
  while (degree >= 10) {
    degree = getSum(degree)
    count += 1
  }
  return count
}

digitDegree(5) === 0

digitDegree(100) === 1

digitDegree(91) === 2

digitDegree(99) === 2

digitDegree(1234567) === 3

digitDegree(1000000000) === 1
