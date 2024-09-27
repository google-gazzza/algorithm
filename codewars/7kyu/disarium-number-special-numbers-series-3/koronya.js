// [JS][7kyu] Disarium Number (Special Numbers Series #3)
// disarium-number-special-numbers-series-3
// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript

const disariumNumber = (n) =>
  n ===
  String(n)
    .split('')
    .reduce((acc, cur, index) => acc + cur ** (index + 1), 0)
    ? 'Disarium !!'
    : 'Not !!'

disariumNumber(89) === 'Disarium !!'
disariumNumber(564) === 'Not !!'
disariumNumber(1024) === 'Not !!'
disariumNumber(135) === 'Disarium !!'
disariumNumber(136586) === 'Not !!'
