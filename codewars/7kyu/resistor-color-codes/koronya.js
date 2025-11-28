// [JS][7kyu] Resistor Color Codes
// resistor-color-codes
// https://www.codewars.com/kata/57cf3dad05c186ba22000348/train/javascript

const colorArr = [
  ['black', 0],
  ['brown', 1],
  ['red', 2],
  ['orange', 3],
  ['yellow', 4],
  ['green', 5],
  ['blue', 6],
  ['violet', 7],
  ['gray', 8],
  ['white', 9],
]

const colorMap = new Map(colorArr)

const adjustResistance = (res) => {
  if (res >= 1_000_000) {
    return res / 1_000_000 + 'M'
  } else if (res >= 1_000) {
    return res / 1_000 + 'k'
  } else {
    return res
  }
}

const decodeResistorColors = (bands) => {
  const arr = bands.split(' ')
  // prettier-ignore
  const tolerance = arr.length === 4 
    ? arr.pop() === 'gold' 
      ? '5%' 
      : '10%' 
    : '20%'
  const firstDigit = colorMap.get(arr[0])
  const secondDigit = colorMap.get(arr[1])
  const multiplier = 10 ** colorMap.get(arr[2])
  const resistance = (firstDigit * 10 + secondDigit) * multiplier

  return `${adjustResistance(resistance)} ohms, ${tolerance}`
}

// decodeResistorColors('yellow violet black') === '47 ohms, 20%'
// decodeResistorColors('yellow violet red gold') === '4.7k ohms, 5%'
// decodeResistorColors('brown black green silver') === '1M ohms, 10%'
// decodeResistorColors('blue gray brown')
