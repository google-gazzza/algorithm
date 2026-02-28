// [JS][7kyu] Round to nearest 0 or 5
// round-to-nearest-0-or-5
// https://www.codewars.com/kata/582f52208278c6be55000067/train/javascript

// return the list with all numbers rounded to nearest 0 or 5
const roundToFive = (numbers) => {
  return numbers.map((num) => {
    const remainder = num % 5
    if (remainder < 2.5) {
      return num - remainder
    } else {
      return num + (5 - remainder)
    }
  })
}

roundToFive([34.5, 56.2, 11, 13])
