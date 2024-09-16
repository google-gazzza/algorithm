// [JS][7kyu] Highest and Lowest
// highest-and-lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

const highAndLow = (numbers) => {
  const sortedNumbers = numbers
    .split(' ')
    .map((item) => Number(item))
    .sort((a, b) => b - a)
  return `${sortedNumbers[0]} ${sortedNumbers[sortedNumbers.length - 1]}`
}

highAndLow('1 2 3 4 5') // return "5 1"
highAndLow('1 2 -3 4 5') // return "5 -3"
highAndLow('1 9 3 4 -5') // return "9 -5"
highAndLow('10 9 3 4 -5') // return "9 -5"


