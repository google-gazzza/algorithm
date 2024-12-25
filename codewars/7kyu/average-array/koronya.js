// [JS][7kyu] Average Array
// average-array
// https://www.codewars.com/kata/596f6385e7cd727fff0000d6/train/javascript

const avgArray = (arr) => {
  const itemLen = arr[0].length
  const sumArr = arr.reduce((acc, cur) => {
    return acc.map((v, i) => v + cur[i])
  }, Array.from({ length: itemLen }).fill(0))
  return sumArr.map((v) => v / arr.length)
}

//   avgArray([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//   ])
// avgArray([
//   [2, 3, 9, 10, 7],
//   [12, 6, 89, 45, 3],
//   [9, 12, 56, 10, 34],
//   [67, 23, 1, 88, 34],
// ])
// avgArray([
//   [1.2, 8.521, 0.4, 3.14, 1.9],
//   [2, 4.5, 3.75, 0.987, 1.0],
// ])
