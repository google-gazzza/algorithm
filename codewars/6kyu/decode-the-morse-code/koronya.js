// [JS][6kyu] Decode the Morse code
// decode-the-morse-code
// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

const MORSE_CODE = {
  '....': 'H',
  '.': 'E',
  '-.--': 'Y',
  '.---': 'J',
  '..-': 'U',
  '-..': 'D',
  '.': 'E',
  '···−−−···': 'SOS',
}

const decodeMorse = (morseCode) => {
  const trimmedCode = morseCode.trim()
  let modifyMorseCode = trimmedCode.replace(/[\s]{2,}/gi, '  ')

  return modifyMorseCode
    .split('  ')
    .map((word) =>
      word
        .split(' ')
        .map((code) => MORSE_CODE[code])
        .reduce((acc, cur) => acc + cur, ''),
    )
    .join(' ')
}

decodeMorse('.... . -.--   .--- ..- -.. .')
decodeMorse('.... . -.--    .--- ..- -.. .')
decodeMorse('.... . -.--     .--- ..- -.. .')
decodeMorse('   .... . -.--   ')
