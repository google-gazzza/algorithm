// [JS][6kyu] Mysterious function
// mysterious-function
// https://www.codewars.com/kata/55217af7ecb43366f8000f76/train/javascript

const ONE_LIST = ['0', '6', '9']
const getZeroCount = (numString) => {
  if (numString === '8') {
    return 2
  }
  if (ONE_LIST.includes(numString) === true) {
    return 1
  }
  return 0
}
const getNum = (n) =>
  String(n)
    .split('')
    .reduce((acc, cur) => acc + getZeroCount(cur), 0)

getNum(300) === 2
getNum(90783) === 4
getNum(123321) === 0
getNum(89282350306) === 8
getNum(3479283469) === 5
