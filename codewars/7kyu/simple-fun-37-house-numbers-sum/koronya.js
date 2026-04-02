// [JS][7kyu] Simple Fun #37: House Numbers Sum
// simple-fun-37-house-numbers-sum
// https://www.codewars.com/kata/58880c6e79a0a3e459000004/train/javascript

const getSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0)

const houseNumbersSum = (inputArray) => {
  const zeroIndex = inputArray.indexOf(0)
  const endIndex = zeroIndex === -1 ? inputArray.length : zeroIndex
  return getSum(inputArray.slice(0, endIndex))
}

houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]) === 11
houseNumbersSum([4, 2, 1, 6, 0]) === 13
houseNumbersSum([4, 1, 2, 3, 0, 10, 2]) === 10
houseNumbersSum([0, 1, 2, 3, 4, 5]) === 0
houseNumbersSum([1, 2, 3, 4]) === 10
