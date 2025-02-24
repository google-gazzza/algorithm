// [JS][6kyu] Temperature converter
// temperature-converter
// https://www.codewars.com/kata/54ce9497975ca65e1a0008c6/train/javascript

const toKelvin = (temp, scale) => {
  switch (scale) {
    case 'K':
      return temp
    case 'C':
      return temp + 273.15
    case 'F':
      return ((temp + 459.67) * 5) / 9
    case 'R':
      return (temp * 5) / 9
    case 'De':
      return 373.15 - (temp * 2) / 3
    case 'N':
      return (temp * 100) / 33 + 273.15
    case 'Re':
      return (temp * 5) / 4 + 273.15
    case 'Ro':
      return ((temp - 7.5) * 40) / 21 + 273.15
    default:
      return NaN
  }
}

const fromKelvin = (temp, scale) => {
  switch (scale) {
    case 'K':
      return temp
    case 'C':
      return temp - 273.15
    case 'F':
      return (temp * 9) / 5 - 459.67
    case 'R':
      return (temp * 9) / 5
    case 'De':
      return ((373.15 - temp) * 3) / 2
    case 'N':
      return ((temp - 273.15) * 33) / 100
    case 'Re':
      return ((temp - 273.15) * 4) / 5
    case 'Ro':
      return ((temp - 273.15) * 21) / 40 + 7.5
    default:
      return NaN
  }
}

const convertTemp = (temp, from_scale, to_scale) => {
  const kelvin = toKelvin(temp, from_scale)
  return Math.round(fromKelvin(kelvin, to_scale))
}

convertTemp(-30, 'De', 'K') === 393
convertTemp(40, 'Re', 'C') === 50
convertTemp(60, 'De', 'F') === 140
convertTemp(666, 'K', 'K') === 666

convertTemp(393, 'K', 'De') === -30
convertTemp(50, 'C', 'Re') === 40
convertTemp(140, 'F', 'De') === 60
