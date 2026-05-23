// [JS][7kyu] Debug Sum of Digits of a Number
// debug-sum-of-digits-of-a-number
// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript

const getSumOfDigits = (integer) => {
  const digits = Math.floor(integer).toString()
  let sum = 0
  for (let ix = 0; ix < digits.length; ix++) {
    sum += parseInt(digits[ix], 10)
  }
  return sum
}

getSumOfDigits(123) === 6
getSumOfDigits(223) === 7
getSumOfDigits(0) === 0
