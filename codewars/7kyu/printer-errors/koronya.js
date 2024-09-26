// [JS][7kyu] Printer Errors
// printer-errors
// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

const CHAR_CODE_OF_LOWER_M = 'm'.charCodeAt(0)

const printerError = (s) => {
  const sLen = s.length
  let count = 0
  for (const d of s) {
    if (d.charCodeAt(0) > CHAR_CODE_OF_LOWER_M) {
      count += 1
    }
  }
  return `${count}/${sLen}`
}

printerError('aaabbbbhaijjjm')
printerError('aaaxbbbbyyhwawiwjjjwwm')
