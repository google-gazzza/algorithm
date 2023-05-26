// [JS][6kyu] WeIrD StRiNg CaSe
// we-ir-d-st-ri-ng-ca-se
// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

const convertWeird = (str) =>
  str
    .split('')
    .map((item, index) => (index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()))
    .join('')

const toWeirdCase = (string) =>
  string
    .split(' ')
    .map((item) => convertWeird(item))
    .join(' ')

toWeirdCase('This is a test') === 'ThIs Is A TeSt'
