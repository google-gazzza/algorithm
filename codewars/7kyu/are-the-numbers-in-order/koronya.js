// [JS][7kyu] Are the numbers in order?
// are-the-numbers-in-order
// https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

function inAscOrder(arr) {
  let prev = arr[0]
  const arrLen = arr.length
  for (let i = 1; i < arrLen; i += 1 || 0) {
    if (prev > arr[i]) {
      return false
    }
    prev = arr[i]
  }
  return true
}

inAscOrder([1, 2, 4, 7, 19]) === true
inAscOrder([1, 2, 3, 4, 5]) === true
inAscOrder([1, 6, 10, 18, 2, 4, 20]) === false
inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]) === false
