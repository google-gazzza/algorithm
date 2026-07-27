// [JS][7kyu] Javascript Mathematician
// javascript-mathematician
// https://www.codewars.com/kata/55c211cce1ef691d9b000061/train/javascript

const getAccSum = (acc, curr) => acc + curr

function calculate() {
  const sum1 = [...arguments].reduce(getAccSum, 0)
  return function () {
    const sum2 = [...arguments].reduce(getAccSum, 0)
    return sum1 + sum2
  }
}

calculate(1)(1) // should return 2
calculate(1, 1)(1) // should return 3
calculate(1, 1)(1, -1) // should return 2
calculate(2, 4)(3, 7, 1) // should return 17
