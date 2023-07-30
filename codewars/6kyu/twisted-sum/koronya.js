// [JS][6kyu] Twisted Sum
// twisted-sum
// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/javascript

const getValue = (num) =>
  String(num)
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0)

const twistedSum = (n) => new Array(n).fill(0).reduce((acc, cur, index) => acc + getValue(index + 1), 0)

twistedSum(3)
twistedSum(10)
twistedSum(11)
twistedSum(12)
