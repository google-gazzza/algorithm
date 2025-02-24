// [JS][6kyu] Ragbaby cipher
// ragbaby-cipher
// https://www.codewars.com/kata/5a2166f355519e161a000019/train/javascript

const isAlpha = (char) => /[a-zA-Z]/.test(char)
const isUpperCase = (char) => /[A-Z]/.test(char)
const getLowerChar = (char) => char.toLowerCase()
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
const ALPHABET_ARR = 'abcdefghijklmnopqrstuvwxyz'.split('')

const getCipherArr = (arr, key) => {
  const keyArr = [...new Set(key)]
  return [...keyArr, ...arr.filter((char) => !keyArr.includes(char))]
}

const getCharOfIndex = (arr, index) => {
  const arrLen = arr.length
  let adjustIndex = index
  while (adjustIndex >= arrLen || adjustIndex < 0) {
    if (adjustIndex >= arrLen) {
      adjustIndex -= arrLen
    } else {
      adjustIndex += arrLen
    }
  }

  return arr[adjustIndex]
}

function encode(text, key) {
  const encodeArr = getCipherArr(ALPHABET_ARR.slice(), key)
  let additionalIndex = 0
  return text
    .split('')
    .map((char) => {
      if (isAlpha(char)) {
        const lowerChar = getLowerChar(char)
        const index = encodeArr.indexOf(lowerChar)
        additionalIndex += 1
        index + additionalIndex
        const encodedChar = getCharOfIndex(encodeArr, index + additionalIndex)

        return isUpperCase(char) ? encodedChar.toUpperCase() : encodedChar
      }
      additionalIndex = 0
      return char
    })
    .join('')
}

function decode(text, key) {
  const encodeArr = getCipherArr(ALPHABET_ARR.slice(), key)
  let additionalIndex = 0
  return text
    .split('')
    .map((char) => {
      if (isAlpha(char)) {
        const lowerChar = getLowerChar(char)
        const index = encodeArr.indexOf(lowerChar)
        additionalIndex += 1
        index + additionalIndex
        const encodedChar = getCharOfIndex(encodeArr, index - additionalIndex)

        return isUpperCase(char) ? encodedChar.toUpperCase() : encodedChar
      }
      additionalIndex = 0
      return char
    })
    .join('')
}

// encode('cipher', 'cipher')
// encode('This is an example.', 'cipher')

// encode('cipher', 'cipher') === 'ihrbfj'
// encode('cipher', 'cccciiiiippphheeeeerrrrr') === 'ihrbfj'
// encode('This is an example.', 'cipher') === 'Urew pu bq rzfsbtj.'
// encode('This.tHis.thIs.thiS...', 'cipher') === 'Urew.uRew.urEw.ureW...'

// decode('ihrbfj', 'cipher') === 'cipher'
// decode('Urew pu bq rzfsbtj.', 'cipher') === 'This is an example.'
// decode('Urew.uRew.urEw.ureW...', 'cipher') === 'This.tHis.thIs.thiS...'

// encode(decode('This is an example.', 'secretkey'), 'secretkey') === 'This is an example.'
// decode(encode('This is an example.', 'secretkey'), 'secretkey') === 'This is an example.'

// encode(decode('This is an example.', 'secretkey'), 'secretkey')
// decode('This is an example.', 'secretkey')
// encode('Rffv hx yl svthjdq', 'secretkey')
// encode(decode('This is an example.', 'secretkey'), 'secretkey')

// encode('This is an example.', 'secretkey')
// decode(encode('This is an example.', 'secretkey'), 'secretkey')

// decode('LwGqAKEuSbBTZfyzUGojCnYGHEHrcUwJ Fj,', 'wnelupqwbr')
