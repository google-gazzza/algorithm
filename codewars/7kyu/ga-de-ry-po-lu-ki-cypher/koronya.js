// [JS][7kyu] GA-DE-RY-PO-LU-KI cypher
// ga-de-ry-po-lu-ki-cypher
// https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/javascript

const cypherMap = new Map([
  ['g', 'a'],
  ['a', 'g'],
  ['d', 'e'],
  ['e', 'd'],
  ['r', 'y'],
  ['y', 'r'],
  ['p', 'o'],
  ['o', 'p'],
  ['l', 'u'],
  ['u', 'l'],
  ['k', 'i'],
  ['i', 'k'],
])

const getTransformedChar = (char) => {
  const lowerChar = char.toLowerCase()
  const isUpperCase = char === char.toUpperCase()
  const transformedChar = cypherMap.get(lowerChar) || lowerChar
  return isUpperCase ? transformedChar.toUpperCase() : transformedChar
}

const encode = (str) => str.split('').map(getTransformedChar).join('')
const decode = encode

encode('Ala has a cat') === 'Gug hgs g cgt'
decode('Gug hgs g cgt') === 'Ala has a cat'
encode('ABCD') === 'GBCE'
encode('gaderypoluki') === 'agedyropulik'
decode('agedyropulik') === 'gaderypoluki'
decode('GBCE') === 'ABCD'
