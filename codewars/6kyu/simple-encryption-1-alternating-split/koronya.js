// [JS][6kyu] Simple Encryption #1 - Alternating Split
// simple-encryption-1-alternating-split
// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

const getEncryptText = (text) => {
  if (text == null) {
    return null
  }
  const textLen = text.length
  let oddStr = ''
  let evenStr = ''
  for (let i = 0; i < textLen; i += 1 || 0) {
    if (i % 2 === 0) {
      oddStr += text[i]
    } else {
      evenStr += text[i]
    }
  }

  return evenStr + oddStr
}

const getDecryptText = (text) => {
  const textLen = text.length
  const limit = Math.floor(textLen / 2)
  const oddStr = text.substring(0, limit)
  const evenStr = text.substring(limit)
  let result = ''
  for (let i = 0; i < limit; i += 1 || 0) {
    result += evenStr[i]
    result += oddStr[i]
  }
  if (oddStr.length < evenStr.length) {
    result += evenStr[evenStr.length - 1]
  }

  return result
}

const encrypt = (text, n) => {
  if (n <= 0) {
    return text
  }
  let target = text
  while (n > 0) {
    n -= 1
    target = getEncryptText(target)
  }

  return target
}

const decrypt = (encryptedText, n) => {
  if (n <= 0) {
    return encryptedText
  }
  let target = encryptedText
  while (n > 0) {
    n -= 1
    target = getDecryptText(target)
  }

  return target
}

// encrypt('This is a test!', 0) === 'This is a test!'
// encrypt('This is a test!', 1) === 'hsi  etTi sats!'
// encrypt('This is a test!', 2) === 's eT ashi tist!'
// encrypt('This is a test!', 3) === ' Tah itse sits!'
// encrypt('This is a test!', 4) === 'This is a test!'
// encrypt('This is a test!', -1) === 'This is a test!'

// decrypt('hsi  etTi sats!', 1) === 'This is a test!'
// decrypt('s eT ashi tist!', 2) === 'This is a test!'
