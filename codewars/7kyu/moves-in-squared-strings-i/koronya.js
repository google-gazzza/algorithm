// [JS][7kyu] Moves in squared strings (I)
// moves-in-squared-strings-i
// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript

const vertMirror = (strng) =>
  strng
    .split('\n')
    .map((item) => item.split('').reverse().join(''))
    .join('\n')
const horMirror = (strng) => strng.split('\n').reverse().join('\n')
const oper = (fct, s) => {
  if (fct === vertMirror) {
    return vertMirror(s)
  }
  return horMirror(s)
}

oper(vertMirror, 'hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu')
// oper(vertMirror, 'IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx')
oper(horMirror, 'lVHt\nJVhv\nCSbg\nyeCt')
// oper(horMirror, 'njMK\ndbrZ\nLPKo\ncEYz')
