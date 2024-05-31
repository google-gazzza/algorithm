// [JS][6kyu] Words to Hex
// words-to-hex
// https://www.codewars.com/kata/596e91b48c92ceff0c00001f/train/javascript

const convertToHex = (str) => {
  return `#${str
    .split('')
    .slice(0, 3)
    .map((char) => char.charCodeAt(0).toString(16))
    .join('')
    .padEnd(6, '0')}`
}

const wordsToHex = (words) => words.split(' ').map((word) => convertToHex(word))

// wordsToHex('Hello, my name is Gary and I like cheese.')
// wordsToHex('0123456789')
// wordsToHex('ThisIsOneLongSentenceThatConsistsOfWords')
// wordsToHex('Blah blah blah blaaaaaaaaaaaah')
// wordsToHex('&&&&& $$$$$ ^^^^^ @@@@@ ()()()()(')
