// [JS][7kyu] Changing letters
// changing-letters
// https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript

const LOWER_VOWEL_LIST = ['a', 'e', 'i', 'o', 'u']

const swap = (string) =>
  string
    .split('')
    .map((char) => (LOWER_VOWEL_LIST.includes(char) ? char.toUpperCase() : char))
    .join('')

swap('') === ''
swap('   @@@') === '   @@@'
swap('HelloWorld!') === 'HEllOWOrld!'
swap('Sunday') === 'SUndAy'
swap('Codewars') === 'COdEwArs'
swap('Monday') === 'MOndAy'
swap('Friday') === 'FrIdAy'
swap('abracadabra') === 'AbrAcAdAbrA'
swap('AbrAcAdAbrA') === 'AbrAcAdAbrA'
swap('ABRACADABRA') === 'ABRACADABRA'
swap('aBRaCaDaBRa') === 'ABRACADABRA'
