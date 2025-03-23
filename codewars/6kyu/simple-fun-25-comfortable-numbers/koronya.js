// [JS][6kyu] Simple Fun #25: Comfortable Numbers
// simple-fun-25-comfortable-numbers
// https://www.codewars.com/kata/5886dbc685d5788715000071/train/javascript

const getSumDigits = (num) =>
  String(num)
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0)

const comfortableNumbers = (L, R) => {
  let count = 0
  for (let i = L; i <= R; i += 1 || 0) {
    const sumDigits = getSumDigits(i)
    const limit = Math.min(i + sumDigits, R)
    for (let j = i + 1; j <= limit; j += 1) {
      const sumDigitsJ = getSumDigits(j)
      if (j - sumDigitsJ <= i && i <= j + sumDigitsJ) {
        count += 1
      }
    }
  }
  return count
}

comfortableNumbers(10, 12) === 2
comfortableNumbers(1, 9) === 20
comfortableNumbers(13, 13) === 0
comfortableNumbers(12, 108) === 707
comfortableNumbers(239, 777) === 6166
comfortableNumbers(1, 1000) === 11435
