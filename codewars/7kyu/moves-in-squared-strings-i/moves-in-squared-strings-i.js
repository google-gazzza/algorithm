/*
moves-in-squared-strings-i

# codewars/7kyu/ Moves in squared strings (I)
Difficulty: 7kyu
URL: https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function vertMirror(strng) {
  return strng.split('\n')
    .map((e) => [...e].reverse().join(''))
    .join('\n');
}

function horMirror(strng) {
  return strng.split('\n')
    .reverse(
    
    ).join('\n');
}

function oper(fct, s) {
  return fct(s);
}

// test
console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"), "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw");
console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"), "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP");
console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"), "yeCt\nCSbg\nJVhv\nlVHt");
console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"), "cEYz\nLPKo\ndbrZ\nnjMK");
