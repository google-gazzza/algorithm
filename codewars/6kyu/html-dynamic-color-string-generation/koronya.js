// [JS][6kyu] HTML dynamic color string generation
// html-dynamic-color-string-generation
// https://www.codewars.com/kata/56f1c6034d0c330e4a001059/train/javascript

const getColorHexCode = () => getRandomNumber(256).toString(16).padStart(2, '0')
const getRandomNumber = (max) => Math.floor(Math.random() * max)

const generateColor = () => {
  const red = getColorHexCode()
  const green = getColorHexCode()
  const blue = getColorHexCode()
  return `#${red}${green}${blue}`
}

generateColor()
generateColor()
generateColor()
generateColor()
