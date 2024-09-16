// [JS][6kyu] The Book of Mormon
// the-book-of-mormon
// https://www.codewars.com/kata/58373ba351e3b615de0001c3/train/javascript

function mormons(startingNumber, reach, target) {
  if (startingNumber >= target) {
    return 0
  }
  let count = 0
  while (startingNumber < target) {
    startingNumber += startingNumber * reach
    count += 1
  }

  return count
}

mormons(10, 3, 9) === 0
mormons(40, 2, 120) === 1
mormons(20000, 2, 7000000000) === 12
