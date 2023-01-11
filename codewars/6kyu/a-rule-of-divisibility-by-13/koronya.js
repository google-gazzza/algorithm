// [JS][6kyu] A Rule of Divisibility by 13
// a-rule-of-divisibility-by-13
// https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/javascript

const REPEATING_SEQUENCE = [1, 10, 9, 12, 3, 4]
const MAX_INDEX = 5
let index = -1

const getNextSequence = () => {
  index = index < MAX_INDEX ? index + 1 : 0
  return REPEATING_SEQUENCE[index]
}

const calculate = (n) => {
  index = -1
  return String(n)
    .split('')
    .reverse()
    .map((item) => Number(item))
    .reduce((acc, cur) => acc + getNextSequence() * cur, 0)
}

const thirt = (n) => {
  let prev = calculate(n)
  let target = calculate(prev)
  while (prev !== target) {
    prev = target
    target = calculate(prev)
  }

  return target
}

thirt(1234567)
thirt(321)

thirt(8529) === 79
thirt(85299258) === 31
thirt(5634) === 57
thirt(1111111111) === 71
thirt(987654321) === 30
