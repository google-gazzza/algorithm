// [JS][6kyu] Rotate Array
// rotate-array
// https://www.codewars.com/kata/5469e0798a3502f4a90005c9/train/javascript

const rotate = (data, n) => {
  const dataLength = data.length
  let num = n > 0 ? n % dataLength : dataLength + (n % dataLength)
  while (num > 0) {
    data.unshift(data.pop())
    num -= 1
  }
  return data
}

// const rotate2 = (data, n) => {
//   const dataLength = data.length
//   let num = n > 0 ? n % dataLength : dataLength + (n % dataLength)
//   data.unshift(...data.splice(-num))
//   return data
// }

// rotate([1, 2, 3, 4, 5], 1)
// rotate([1, 2, 3, 4, 5], -1)
// rotate([1, 2, 3, 4, 5], -11)
