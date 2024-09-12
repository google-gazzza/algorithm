// [JS][7kyu] Compare Strings by Sum of Chars
// compare-strings-by-sum-of-chars
// https://www.codewars.com/kata/576bb3c4b1abc497ec000065/train/javascript
const isAlphabet = (str) => {
  return /^[A-Za-z]+$/.test(str)
}

const getValue = (str) => {
  if (isAlphabet(str) === false) {
    return 0
  }
  return str
    ? str
        .toUpperCase()
        .split('')
        .reduce((acc, cur) => acc + cur.charCodeAt(0), 0)
    : 0
}

const compare = (s1, s2) => {
  return getValue(s1) === getValue(s2)
}

compare('AD', 'BC') === true
compare('AD', 'DD') === false
compare('gf', 'FG') === true
compare('Ad', 'DD') === false
compare('zz1', '') === true
compare('ZzZz', 'ffPFF') === true
compare('kl', 'lz') === false
compare('!!', '7476') === true
compare('##', '1176') === true

compare(null, 'BC') === false
compare(null, null) === true
compare(null, '') === true
compare('', '') === true
