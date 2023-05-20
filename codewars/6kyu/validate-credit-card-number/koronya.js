// [JS][6kyu] Validate Credit Card Number
// validate-credit-card-number
// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript

const modifyValue = (num) => {
  const double = num * 2
  if (double <= 9) {
    return double
  }
  return String(double)
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0)
}

function validate(n) {
  const sum = String(n)
    .split('')
    .reverse()
    .map((num, index) => (index % 2 === 0 ? num : modifyValue(num)))
    .reduce((acc, cur) => acc + Number(cur), 0)
  return sum % 10 === 0
}

validate(123) === false
validate(1) === false
validate(2121) === true
validate(1230) === true
