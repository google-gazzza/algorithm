// [JS][7kyu] Simple Fun #2: Circle of Numbers
// simple-fun-2-circle-of-numbers
// https://www.codewars.com/kata/58841cb52a077503c4000015/train/javascript

const circleOfNumbers = (n, firstNumber) => {
  const half = n / 2
  return (firstNumber + half) % n
}

circleOfNumbers(10, 2) === 7
circleOfNumbers(10, 7) === 2
circleOfNumbers(4, 1) === 3
circleOfNumbers(6, 3) === 0
