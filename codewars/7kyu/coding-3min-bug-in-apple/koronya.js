// [JS][7kyu] Coding 3min: Bug in Apple
// coding-3min-bug-in-apple
// https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9/train/javascript

const sc = (apple) => {
  const rowIndex = apple.findIndex((line) => line.includes('B'))
  const colIndex = apple[rowIndex].indexOf('B')
  return [rowIndex, colIndex]
}

sc([
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'B', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
])
