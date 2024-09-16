// [JS][6kyu] Kebabize
// kebabize
// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

const REG_UPPER = /[A-Z]/
const REG_LOWER = /[a-z]/
const REG_ALPHABET = /[a-zA-Z]/

const filterOnlyAlphabet = (str) =>
  str
    .split('')
    .filter((str) => REG_ALPHABET.test(str))
    .join('')

filterOnlyAlphabet('1abc2dKor23oNya2')

const kebabize = (str) => {
  const adjustStr = filterOnlyAlphabet(str)
  const adjustStrLen = adjustStr.length
  if (adjustStrLen === 0) {
    return ''
  }
  const arr = [adjustStr[0]?.toLowerCase()]
  for (let i = 1; i < adjustStrLen; i += 1 || 0) {
    const char = adjustStr[i]
    if (REG_UPPER.test(char) === true) {
      arr.push(`-${char.toLowerCase()}`)
    } else if (REG_LOWER.test(char) === true) {
      arr.push(char)
    }
  }
  return arr.join('')
}

kebabize('myCamelCasedString') === 'my-camel-cased-string'
kebabize('myCamelHas3Humps') === 'my-camel-has-humps'
