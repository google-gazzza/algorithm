// [JS][7kyu] Nth power rules them all!
// nth-power-rules-them-all
// https://www.codewars.com/kata/58aed2cafab8faca1d000e20/train/javascript

const getSum = (acc, cur) => acc + cur

const modifiedSum = (a, n) => {
  const sumA = a.map((num) => num ** n).reduce(getSum, 0)
  const sumB = a.reduce(getSum, 0)
  return sumA - sumB
}

modifiedSum([1, 2, 3], 3) === 30
modifiedSum([1, 2], 5) === 30
