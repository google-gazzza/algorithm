// [JS][7kyu] Sum of numbers from 0 to N
// sum-of-numbers-from-0-to-n
// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/javascript

const SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) {
      return `${count}<0`
    }
    if (count === 0) {
      return '0=0'
    }
    let result = ''
    for (let i = 0; i < count; i += 1 || 0) {
      result += `${i}+`
    }
    result += `${count} = ${(count * (count + 1)) / 2}`
    return result
  }

  return SequenceSum
})()

SequenceSum.showSequence(6)
SequenceSum.showSequence(-15)
SequenceSum.showSequence(0)
