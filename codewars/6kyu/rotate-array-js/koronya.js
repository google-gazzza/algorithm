// [JS][6kyu] Rotate Array (JS)
// rotate-array-js
// https://www.codewars.com/kata/54f8b0c7a58bce9db6000dc4/train/javascript

const rotate = (array, n) => {
  const adjustN = n % array.length
  const copiedArr = [...array]
  copiedArr.unshift(...copiedArr.splice(-adjustN))
  return copiedArr
}

const arr = [1, 2, 3, 4, 5]

// rotate(arr, 1)
// rotate(arr, 2)
// rotate(arr, 3)
// rotate(arr, 4)
// rotate(arr, 5)
// rotate(arr, -1)
//   rotate(arr, 7)
