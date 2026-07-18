// [JS][7kyu] Cipher
// cipher
// https://www.codewars.com/kata/5a19701d80171fd71d000029/train/javascript

const encode = (str) =>
  str
    .split('')
    .map((char) => String.fromCharCode(char.charCodeAt(0) * 6))
    .join('')

const decode = (str) =>
  str
    .split('')
    .map((char) => String.fromCharCode(char.charCodeAt(0) / 6))
    .join('')

encode('Hello World!') === 'ưɞʈʈʚÀȊʚʬʈɘÆ'
decode('ưɞʈʈʚÀȊʚʬʈɘÆ') === 'Hello World!'
