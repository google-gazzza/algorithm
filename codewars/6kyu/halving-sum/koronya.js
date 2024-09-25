// [JS][7kyu] Halving Sum
// halving-sum
// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

const halvingSum = (n) => {
  let sum = 0
  let target = n
  while (target >= 1) {
    sum += target
    target = Math.floor(target / 2)
  }
  return sum
}

halvingSum(25) === 47
halvingSum(127) === 247
