// [JS][6kyu] If you can read this...
// if-you-can-read-this
// https://www.codewars.com/kata/586538146b56991861000293/train/javascript

const NATO_MAP = [
  'Alfa',
  'Bravo',
  'Charlie',
  'Delta',
  'Echo',
  'Foxtrot',
  'Golf',
  'Hotel',
  'India',
  'Juliett',
  'Kilo',
  'Lima',
  'Mike',
  'November',
  'Oscar',
  'Papa',
  'Quebec',
  'Romeo',
  'Sierra',
  'Tango',
  'Uniform',
  'Victor',
  'Whiskey',
  'Xray',
  'Yankee',
  'Zulu',
]

const puntuationList = [',', '.', '!', '?']

const KEYCODE_OF_UPPER_A = 'A'.charCodeAt(0)

const getIndex = (char) => char.toUpperCase().charCodeAt(0) - KEYCODE_OF_UPPER_A

const to_nato = (words) => {
  return words
    .split('')
    .filter((char) => char !== ' ')
    .map((char) => {
      if (puntuationList.includes(char)) {
        return char
      }
      return NATO_MAP[getIndex(char)]
    })
    .join(' ')
}

to_nato('If you can read')
to_nato('If you can read') === 'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta'
to_nato('Did not see that coming')
to_nato('go for it!')
