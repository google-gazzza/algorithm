// [JS][7kyu] Scrabble Score
// scrabble-score
// https://www.codewars.com/kata/558fa34727c2d274c10000ae/train/javascript

const SCORES = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
}

const getScore = (letter) => SCORES[letter.toLowerCase()] || 0
const scrabbleScore = (str) => str.split('').reduce((acc, cur) => acc + getScore(cur), 0)

scrabbleScore('') === 0
scrabbleScore('a') === 1
scrabbleScore('street') === 6
scrabbleScore(' a') === 1
scrabbleScore('f') === 4
scrabbleScore('quirky') === 22
scrabbleScore('MULTIBILLIONAIRE') === 20
scrabbleScore('st re et') === 6
scrabbleScore('alacrity') === 13
