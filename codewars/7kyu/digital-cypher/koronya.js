// [JS][7kyu] Digital cypher
// digital-cypher
// https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript

const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)

const getCode = (char) => {
  return char.charCodeAt(0) - CHAR_CODE_OF_LOWER_A + 1
}

const encode = (str, n) => {
  const nString = String(n)
  const nStringLen = String(n).length
  let nIndex = 0
  const getNextN = () => {
    const result = nString[nIndex % nStringLen]
    nIndex += 1
    return result
  }

  return str.split('').map((char) => {
    const code = getCode(char)
    const n = getNextN()
    return code + Number(n)
  })
}

encode('scout', 1939)
encode('masterpiece', 1939)
