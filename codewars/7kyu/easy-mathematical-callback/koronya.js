// [JS][7kyu] Easy mathematical callback
// easy-mathematical-callback
// https://www.codewars.com/kata/54b7c8d2cd7f51a839000ebf/train/javascript

const processArray = (arr, callback) => arr.map(callback)

let myArray = [4, 8, 2, 7, 5]
myArray = processArray(myArray, function (a) {
  return a * 2
})

let myArray2 = [7, 8, 9, 1, 2]
myArray2 = processArray(myArray2, function (a) {
  return a + 5
})
