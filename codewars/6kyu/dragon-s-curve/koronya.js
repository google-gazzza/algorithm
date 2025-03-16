// [JS][6kyu] Dragon's Curve
// dragon-s-curve
// https://www.codewars.com/kata/53ad7224454985e4e8000eaa/train/javascript

const convertStr = (str) =>
  str
    .split('')
    .map((char) => (char === 'a' ? 'aRbFR' : char === 'b' ? 'LFaLb' : char))
    .join('')

const Dragon = function (n) {
  if (typeof n !== 'number' || n < 0 || n % 1 !== 0) {
    return ''
  }
  if (n === 0) {
    return 'F'
  }
  let count = n
  let str = 'Fa'
  while (count > 0) {
    count -= 1
    str = convertStr(str)
  }
  return str
    .split('')
    .filter((char) => char !== 'a' && char !== 'b')
    .join('')
}

Dragon('a') === 'F'
Dragon(0) === 'F'
Dragon(1) === 'FRFR'
Dragon(2) === 'FRFRRLFLFR'
