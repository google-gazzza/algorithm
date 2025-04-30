// [JS][7kyu] Filter unused digits
// filter-unused-digits
// https://www.codewars.com/kata/55de6173a8fbe814ee000061/train/javascript

function unusedDigits() {
  const numSet = new Set('0123456789')
  ;[...arguments].forEach((arg) => {
    String(arg)
      .split('')
      .forEach((digit) => {
        numSet.delete(digit)
      })
  })
  return [...numSet].join('')
}

unusedDigits(12, 34, 56, 78) === '09'
unusedDigits(2015, 8, 26) === '3479'
