// [JS][7kyu] Sum Array with different bases
// sum-array-with-different-bases
// https://www.codewars.com/kata/5a005f4fba2a14897f000086/train/javascript

const convertToDecimal = (numberStr, base) => {
  return numberStr
    .split('')
    .reverse()
    .reduce((acc, digit, index) => {
      const digitValue = parseInt(digit, 36)
      return acc + digitValue * Math.pow(base, index)
    }, 0)
}

const sumItUp = (numbersWithBases) => {
  return numbersWithBases.reduce((sum, [numberStr, base]) => {
    return sum + convertToDecimal(numberStr, base)
  }, 0)
}

sumItUp([
  ['101', 2],
  ['10', 8],
]) === 13
sumItUp([
  ['ABC', 16],
  ['11', 2],
]) === 2751
sumItUp([
  ['101', 16],
  ['7640', 8],
  ['1', 9],
]) === 4258
