// [JS][7kyu] Product Of Maximums Of Array (Array Series #2)
// product-of-maximums-of-array-array-series-2
// https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript

const maxProduct = (numbers, size) => {
  const arr = numbers.sort((a, b) => b - a)
  return arr.slice(0, size).reduce((acc, curr) => acc * curr, 1)
}

maxProduct([4, 3, 5], 2) === 20
maxProduct([10, 8, 7, 9], 3) === 720
maxProduct([8, 6, 4, 6], 3) === 288
maxProduct([10, 2, 3, 8, 1, 10, 4], 5) === 9600
maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5) === 247895375
maxProduct([-4, -27, -15, -6, -1], 2) === 4
maxProduct([-17, -8, -102, -309], 2) === 136
maxProduct([10, 3, -27, -1], 3) === -30
maxProduct([14, 29, -28, 39, -16, -48], 4) === -253344
maxProduct([1], 1) === 1
