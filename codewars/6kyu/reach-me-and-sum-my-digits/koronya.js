// [JS][6kyu] Reach Me and Sum my Digits
// reach-me-and-sum-my-digits
// https://www.codewars.com/kata/55ffb44050558fdb200000a4/train/javascript

const getDigit = (num) =>
  num
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0)

const sumDigNthTerm = (initval, patternl, nthterm) => {
  const patternLen = patternl.length
  let result = initval
  for (let i = 0; i < nthterm - 1; i += 1 || 0) {
    patternl[i % patternLen]
    result += patternl[i % patternLen]
  }
  return getDigit(result)
}

sumDigNthTerm(10, [2, 1, 3], 6) === 10
sumDigNthTerm(10, [2, 1, 3], 15) === 10
sumDigNthTerm(10, [2, 1, 3], 50) === 9
sumDigNthTerm(10, [2, 1, 3], 78) === 10
sumDigNthTerm(10, [2, 1, 3], 157) === 7
