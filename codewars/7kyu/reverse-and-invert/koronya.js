// [JS][7kyu] Reverse and Invert
// reverse-and-invert
// https://www.codewars.com/kata/5899e054aa1498da6b0000cc/train/javascript

const convertReverseNumber = (num) => {
  const isPlus = num >= 0 ? true : false
  const str = String(num)
  const arr = str.split('')
  const reversed = isPlus ? arr.reverse().join('') : arr.slice(1).reverse().join('')
  const numValue = Number(reversed)
  return isPlus ? -numValue : numValue
}

const reverseInvert = (array) => array.filter((item) => typeof item === 'number' && Math.floor(item) === item).map((item) => convertReverseNumber(item))

// reverseInvert([1, 2, 3, 4, 5])
// reverseInvert([-10])
// reverseInvert([-9, -18, 99])
// reverseInvert([1, 12, 'a', 3.4, 87, 99.9, -42, 50, 5.6])
// reverseInvert([])
// reverseInvert(['s', 'q', -55, 29, -34, 0.18, 0, 't', -0.85, 50, 0.54, 0.25, 78, 46, -6])
