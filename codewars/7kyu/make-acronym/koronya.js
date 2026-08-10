// [JS][7kyu] Make acronym
// make-acronym
// https://www.codewars.com/kata/57a60bad72292d3e93000a5a/train/javascript

const toAcronym = (inp) =>
  inp
    .split(' ')
    .map((str) => str[0].toUpperCase())
    .join('')

toAcronym('Code wars')
