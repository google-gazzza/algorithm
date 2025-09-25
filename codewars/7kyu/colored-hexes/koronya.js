// [JS][7kyu] Colored Hexes!
// colored-hexes
// https://www.codewars.com/kata/57e17750621bca9e6f00006f/train/javascript

const COLOR_MAP = new Map([
  ['100', 'red'],
  ['010', 'green'],
  ['001', 'blue'],
  ['110', 'yellow'],
  ['101', 'magenta'],
  ['011', 'cyan'],
  ['111', 'white'],
  ['000', 'black'],
])

const hexColor = (codes) => {
  if (!codes) {
    return 'black'
  }
  const codesArr = codes.split(' ').map((x) => Number(x))
  const [r, g, b] = codesArr
  const max = Math.max(r, g, b)
  if (max === 0) {
    return 'black'
  }

  const colorKey = codesArr.map((code) => (code === max ? '1' : '0')).join('')
  return COLOR_MAP.get(colorKey)
}

hexColor('') === 'black'
hexColor('000 000 000') === 'black'
hexColor('121 245 255') === 'blue'
hexColor('027 100 100') === 'cyan'
hexColor('021 021 021') === 'white'
hexColor('255 000 000') === 'red'
hexColor('000 147 000') === 'green'
hexColor('212 103 212') === 'magenta'
hexColor('101 101 092') === 'yellow'
