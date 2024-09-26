// [JS][5kyu] String incrementer
// string-incrementer
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

const CHAR_CODE_AT_0 = '0'.charCodeAt(0)
const CHAR_CODE_AT_9 = '9'.charCodeAt(0)

const isNumberChar = (char) => {
  const charCode = char.charCodeAt(0)
  return charCode >= CHAR_CODE_AT_0 && charCode <= CHAR_CODE_AT_9
}

const getNextNumberStr = (str) => String(Number(str) + 1).padStart(str.length, '0')

const incrementString = (strng) => {
  const strLen = strng.length
  let candidateIndex = -1

  let index = strLen - 1
  let target = strng[index]
  while (index > -1 && isNumberChar(target)) {
    candidateIndex = index
    index -= 1
    target = strng[index]
  }

  return candidateIndex === -1 ? `${strng}1` : `${strng.slice(0, candidateIndex)}${getNextNumberStr(strng.slice(candidateIndex))}`
}

incrementString('foo')
incrementString('foobar23')
incrementString('foo0042')
incrementString('foobar000')
incrementString('')
incrementString('11')
incrementString('19')
incrementString('9')
incrementString('foo9')

