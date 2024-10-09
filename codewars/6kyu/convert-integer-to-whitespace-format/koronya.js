// [JS][6kyu] Convert integer to Whitespace format
// convert-integer-to-whitespace-format
// https://www.codewars.com/kata/55b350026cc02ac1a7000032/train/javascript

const convertBinary = (n) => (n === '0' ? ' ' : '\t')

const whitespaceNumber = (n) => {
  if (n === 0) {
    return ' \n'
  }
  const binaryString = Math.abs(n).toString(2)
  return `${n > 0 ? ' ' : '\t'}${binaryString.split('').map(convertBinary).join('')}\n`
}

whitespaceNumber(1)
whitespaceNumber(1) === ' \t\n'
whitespaceNumber(0) === ' \n'
whitespaceNumber(-1) === '\t\t\n'
whitespaceNumber(2) === ' \t \n'
whitespaceNumber(-3) === '\t\t\t\n'
