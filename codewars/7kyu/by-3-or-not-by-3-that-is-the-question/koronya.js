// [JS][7kyu] By 3, or not by 3? That is the question . . .
// by-3-or-not-by-3-that-is-the-question
// https://www.codewars.com/kata/59f7fc109f0e86d705000043/train/javascript

// without % operator
const getRemainderByDivide3 = (num) => {
  while (num >= 3) {
    num -= 3
  }
  return num
}

const divisibleByThree = (str) => {
  const remainderSum = str.split('').reduce((acc, cur) => acc + Number(cur), 0)
  return getRemainderByDivide3(remainderSum) === 0
}

divisibleByThree('123')
divisibleByThree('8409')
divisibleByThree('100853')
divisibleByThree('33333333')
divisibleByThree('7')
