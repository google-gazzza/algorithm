// [JS][6kyu] Simple decrypt algo
// simple-decrypt-algo
// https://www.codewars.com/kata/58693136b98de0e4910001ab/train/javascript

const getIndex = (char) => {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
  return ALPHABET.indexOf(char)
}

const decrypt = (encryption) => {
  const result = Array.from({ length: 26 }, () => 0)
  encryption.split('').forEach((char) => {
    if (getIndex(char) !== -1) {
      result[getIndex(char)] += 1
    }
  })
  return result.join('')
}

decrypt('$aaaa#bbb*ccfff!z')
decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001'
decrypt('z$aaa#ccc%eee123456789') === '30303000000000000000000001'
