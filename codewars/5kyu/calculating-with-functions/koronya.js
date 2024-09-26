// [JS][5kyu] Calculating with Functions
// calculating-with-functions
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

const getResult = (numA, numB, operand) => {
  switch (operand) {
    case '+':
    default:
      return numA + numB
    case '-':
      return numA - numB
    case '*':
      return numA * numB
    case '/':
      return Math.floor(numA / numB)
  }
}

const helperFnc = (numA, arr) => {
  if (!arr) {
    return numA
  }
  const [operand, numB] = arr
  return getResult(numA, numB, operand)
}
const numFnc = (num) => (arr) => helperFnc(num, arr)

const zero = numFnc(0)
const one = numFnc(1)
const two = numFnc(2)
const three = numFnc(3)
const four = numFnc(4)
const five = numFnc(5)
const six = numFnc(6)
const seven = numFnc(7)
const eight = numFnc(8)
const nine = numFnc(9)

const plus = (num) => ['+', num]
const minus = (num) => ['-', num]
const times = (num) => ['*', num]
const dividedBy = (num) => ['/', num]

seven(times(five()))
seven(times(two()))
