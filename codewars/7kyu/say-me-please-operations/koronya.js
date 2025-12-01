// [JS][7kyu] Say Me Please Operations
// say-me-please-operations
// https://www.codewars.com/kata/5b5e0c0d83d64866bc00001d/train/javascript

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const operationArr = [add, subtract, multiply]
const operationNames = ['addition', 'subtraction', 'multiplication']

const sayMeOperations = (str) => {
  const resultArr = []
  const numArr = str.split(' ').map(Number)
  let startIndex = 0
  while (startIndex < numArr.length - 2) {
    const a = numArr[startIndex]
    const b = numArr[startIndex + 1]
    const c = numArr[startIndex + 2]
    const operationIndex = operationArr.findIndex((operation) => operation(a, b) === c)
    resultArr.push(operationIndex === -1 ? 'division' : operationNames[operationIndex])
    startIndex += 1
  }

  return resultArr.join(', ')
}

// sayMeOperations('4 6 0 6')
// sayMeOperations('1 2 3 5 8') === 'addition, addition, addition'
// sayMeOperations('9 4 5 20 25') === 'subtraction, multiplication, addition'
// sayMeOperations('10 2 5 -3 -15 12') === 'division, subtraction, multiplication, subtraction'
// sayMeOperations('2 2 4') === 'addition'
