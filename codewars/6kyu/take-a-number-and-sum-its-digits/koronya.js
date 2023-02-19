// [JS][6kyu] Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
// take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-eureka
// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

const isEureka = (num) => {
  const strNum = String(num)
  const numLen = strNum.length
  let sum = 0
  let index = 0
  while (index < numLen && sum < num) {
    sum += strNum[index] ** (index + 1)
    index += 1
  }

  return sum === num
}

const sumDigPow = (a, b) => {
  const result = []
  for (let i = a; i <= b; i += 1 || 0) {
    if (isEureka(i) === true) {
      result.push(i)
    }
  }

  return result
}

isEureka(19)
isEureka(89)

sumDigPow(1, 100)
