// [JS][7kyu] Which color is the brightest?
// which-color-is-the-brightest
// https://www.codewars.com/kata/62eb800ba29959001c07dfee/train/javascript

const CHARCODE_OF_A = 'A'.charCodeAt(0)
const CHARCODE_OF_F = 'F'.charCodeAt(0)

const transformHex = (char) => {
  const charCode = char.charCodeAt(0)
  if (charCode >= CHARCODE_OF_A && charCode <= CHARCODE_OF_F) {
    return charCode - CHARCODE_OF_A + 10
  }
  return Number(char)
}

const getValue = (str) => {
  const [a, b] = str.split('').map(transformHex)
  return a * 16 + b
}

const brightest = (colors) => {
  const arr = colors.map((color) => {
    const red = color.slice(1, 3)
    const green = color.slice(3, 5)
    const blue = color.slice(5)
    const arr = [red, green, blue]
    return { color, value: Math.max(...arr.map(getValue)) }
  })
  return arr.sort((a, b) => b.value - a.value)[0].color
}

brightest(['#001000', '#000000']) === '#001000'
brightest(['#ABCDEF', '#123456']) === '#ABCDEF'
brightest(['#00FF00', '#FFFF00']) === '#00FF00'
brightest(['#FFFFFF', '#1234FF']) === '#FFFFFF'
brightest(['#FFFFFF', '#123456', '#000000']) === '#FFFFFF'
