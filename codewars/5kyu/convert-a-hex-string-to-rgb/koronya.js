// [JS][5kyu] Convert A Hex String To RGB
// convert-a-hex-string-to-rgb
// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript

const stringToNumberValue = (str) => {
  switch (str) {
    case 'A':
      return 10
    case 'B':
      return 11
    case 'C':
      return 12
    case 'D':
      return 13
    case 'E':
      return 14
    case 'F':
      return 15
    default:
      return Number(str)
  }
}

const convertDoubleStringToNumber = (str) => {
  const [first, second] = str.split('').map((item) => item.toUpperCase())
  return stringToNumberValue(first) * 16 + stringToNumberValue(second)
}

const hexStringToRGB = (hexString) => {
  const r = convertDoubleStringToNumber(hexString.slice(1, 3))
  const g = convertDoubleStringToNumber(hexString.slice(3, 5))
  const b = convertDoubleStringToNumber(hexString.slice(5, 7))
  return { r, g, b }
}

hexStringToRGB('#FF9933')
