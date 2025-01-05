// [JS][7kyu] Excel sheet column numbers
// excel-sheet-column-numbers
// https://www.codewars.com/kata/55ee3ebff71e82a30000006a/train/javascript

const titleToNumber = (title) =>
  title
    .split('')
    .map((char) => char.charCodeAt(0) - 64)
    .reduce((acc, cur) => acc * 26 + cur, 0)

titleToNumber('A') === 1
titleToNumber('Z') === 26
titleToNumber('AA') === 27
titleToNumber('AZ') === 52
titleToNumber('BA') === 53
titleToNumber('CODEWARS') === 28779382963
