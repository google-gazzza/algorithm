// [JS][7kyu] Password maker
// password-maker
// https://www.codewars.com/kata/5637b03c6be7e01d99000046/train/javascript

const convertFirstLetter = (char) => {
  switch (char.toLowerCase()) {
    case 'i':
      return '1'
    case 'o':
      return '0'
    case 's':
      return '5'
    default:
      return char
  }
}

const makePassword = (phrase) =>
  phrase
    .split(' ')
    .map((word) => convertFirstLetter(word[0]))
    .join('')

makePassword('Give me liberty or give me death') === 'Gml0gmd'
makePassword('Keep Calm and Carry On') === 'KCaC0'
