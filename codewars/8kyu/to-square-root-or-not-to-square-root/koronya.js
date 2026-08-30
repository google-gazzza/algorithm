// [JS][8kyu] To square(root) or not to square(root)
// to-square-root-or-not-to-square-root
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

const squareOrSquareRoot = (array) => {
  return array.map((num) => {
    const sqrtValue = Math.sqrt(num)
    return sqrtValue % 1 === 0 ? sqrtValue : num ** 2
  })
}

squareOrSquareRoot([4, 3, 9, 7, 2, 1])
