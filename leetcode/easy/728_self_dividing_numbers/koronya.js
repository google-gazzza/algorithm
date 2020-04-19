// https://leetcode.com/problems/self-dividing-numbers
// Runtime: 56 ms, faster than 88.58% of JavaScript online submissions for Self Dividing Numbers.
// Memory Usage: 37 MB, less than 61.54% of JavaScript online submissions for Self Dividing Numbers.
const isSelfDivided = num => {
  const arr = String(num).split('')
  return arr.every(item => num % item === 0)
}

const selfDividingNumbers = (left, right) => {
  const resultArr = []
  for (let num = left; num <= right; num += 1) {
    if (isSelfDivided(num) === true) {
      resultArr.push(num)
    }
  }
  return resultArr
}
