// [JS][6kyu] Basic Encryption
// basic-encryption
// https://www.codewars.com/kata/5862fb364f7ab46270000078/train/javascript

const getModifyCode = (num) => num % 256

const encrypt = (text, rule) =>
  text
    .split('')
    .map((char) => String.fromCharCode(getModifyCode(char.charCodeAt(0) + rule)))
    .join('')

encrypt('', 1) === ''
encrypt('a', 1) === 'b'
encrypt('please encrypt me', 2) === 'rngcug"gpet{rv"og'
encrypt('djrclwwdxlzrctrxewovmrbfkq', 201) === '-3;,5@@-A5C;,=;A.@8?6;+/4:'
