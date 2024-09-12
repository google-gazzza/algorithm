// [JS][6kyu] Change it up
// change-it-up
// https://www.codewars.com/kata/58039f8efca342e4f0000023/train/javascript

const KEYCODE_OF_LOWER_A = 'a'.charCodeAt(0)
const KEYCODE_OF_LOWER_Z = 'z'.charCodeAt(0)

const getNextAlphabet = (char) => {
  const lowerCode = char.toLowerCase().charCodeAt(0)
  if (lowerCode >= KEYCODE_OF_LOWER_A && lowerCode <= KEYCODE_OF_LOWER_Z) {
    return String.fromCharCode(((lowerCode - KEYCODE_OF_LOWER_A + 1) % 26) + KEYCODE_OF_LOWER_A)
  }

  return char
}

const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u']
const getUpperIfVowel = (char) => (VOWEL_LIST.includes(char) ? char.toUpperCase() : char)

const changer = (str) =>
  str
    .split('')
    .map((char) => {
      return getUpperIfVowel(getNextAlphabet(char))
    })
    .join('')

changer('Cat30') === 'dbU30'
changer('Alice') === 'bmjdf'
changer('sponge1') === 'tqpOhf1'
changer('Hello World') === 'Ifmmp xpsmE'
changer('dogs') === 'Epht'
changer('z') === 'A'
