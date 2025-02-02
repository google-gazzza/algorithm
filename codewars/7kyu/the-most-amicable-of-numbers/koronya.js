// [JS][7kyu] The Most Amicable of Numbers
// the-most-amicable-of-numbers
// https://www.codewars.com/kata/56b5ebaa26fd54188b000018/train/javascript

const getSum = (num) => {
  const limit = Math.sqrt(num)
  let sum = 1
  for (let i = 2; i < limit; i += 1) {
    if (num % i === 0) {
      sum += i
      sum += num / i
    }
  }
  return sum
}

const amicableNumbers = (num1, num2) => getSum(num1) === num2 && getSum(num2) === num1

amicableNumbers(220, 284) === true
amicableNumbers(220, 280) === false
amicableNumbers(1184, 1210) === true
amicableNumbers(220221, 282224) === false
