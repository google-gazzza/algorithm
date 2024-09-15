// [JS][6kyu] Cumulative Triangle
// cumulative-triangle
// https://www.codewars.com/kata/5301329926d12b90cc000908/train/javascript

const getNthNumber = (n) => 1 + (n * (n - 1)) / 2

const cumulativeTriangle = (n) => {
  const number = getNthNumber(n)
  return Array.from({ length: n }, (_, i) => number + i).reduce((acc, cur) => acc + cur, 0)
}

const cumulativeTriangle2 = (n) => {
  const number = getNthNumber(n)
  return ((number + number + n - 1) * n) / 2
}

cumulativeTriangle(2) === 5
cumulativeTriangle(3) === 15
cumulativeTriangle(4) === 34

cumulativeTriangle2(2) === 5
cumulativeTriangle2(3) === 15
cumulativeTriangle2(4) === 34
