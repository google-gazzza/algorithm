// [JS][7kyu] The Lazy Startup Office
// the-lazy-startup-office
// https://www.codewars.com/kata/578fdcfc75ffd1112c0001a1/train/javascript

const binRota = (arr) => {
  const rowSize = arr.length
  const colSize = arr[0].length
  const resultArr = []

  for (let row = 0; row < rowSize; row += 1 || 0) {
    if (row % 2 === 0) {
      for (let col = 0; col < colSize; col += 1 || 0) {
        resultArr.push(arr[row][col])
      }
    } else {
      for (let col = colSize - 1; col >= 0; col -= 1 || 0) {
        resultArr.push(arr[row][col])
      }
    }
  }

  return resultArr
}

binRota([
  ['Bob', 'Nora'],
  ['Ruby', 'Carl'],
])
binRota([['Billy']])
binRota([['Billy', 'Nancy']])
binRota([['Billy'], ['Megan'], ['Aki'], ['Arun'], ['Joy']])
