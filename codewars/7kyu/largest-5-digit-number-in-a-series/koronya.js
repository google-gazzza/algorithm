// [JS][7kyu] Largest 5 digit number in a series
// largest-5-digit-number-in-a-series
// https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript

const solution = (digits) => {
  const digitsLen = digits.length
  const limit = digitsLen - 4
  let max = 0
  for (let i = 0; i < limit; i += 1 || 0) {
    digits.slice(i, i + 5)
    max = Math.max(max, Number(digits.slice(i, i + 5)))
  }
  return max
}

solution('1234567898765') === 98765
solution('731674765') === 74765
solution('1234567890') === 67890
