// [JS][7kyu] Adding ordinal indicator suffixes to numbers
// adding-ordinal-indicator-suffixes-to-numbers
// https://www.codewars.com/kata/52dca71390c32d8fb900002b/train/javascript

const numberToOrdinal = (n) => {
  if (n === 0) {
    return '0'
  }
  const suffixes = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0])
}

numberToOrdinal(0) === '0'
numberToOrdinal(1) === '1st'
numberToOrdinal(2) === '2nd'
numberToOrdinal(3) === '3rd'
numberToOrdinal(4) === '4th'
numberToOrdinal(11) === '11th'
numberToOrdinal(12) === '12th'
numberToOrdinal(13) === '13th'
numberToOrdinal(14) === '14th'
numberToOrdinal(21) === '21st'
