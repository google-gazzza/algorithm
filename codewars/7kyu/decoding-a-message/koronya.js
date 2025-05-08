// [JS][7kyu] Decoding a message
// decoding-a-message
// https://www.codewars.com/kata/565b9d6f8139573819000056/train/javascript

const decodeChar = (char) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const reversedAlphabet = alphabet.split('').reverse().join('')
  const charIndex = alphabet.indexOf(char)

  return charIndex === -1 ? char : reversedAlphabet[charIndex]
}

const decode = (message) =>
  message
    .split('')
    .map((char) => decodeChar(char))
    .join('')

decode('sr') === 'hi'
decode('svool') === 'hello'
