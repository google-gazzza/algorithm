// [JS][7kyu] De-Emojify
// de-emojify
// https://www.codewars.com/kata/6627696c86b953001280675e/train/javascript

const EMOJI_MAP = new Map([
  [':)', '0'],
  [':D', '1'],
  ['>(', '2'],
  ['>:C', '3'],
  [':/', '4'],
  [':|', '5'],
  [':O', '6'],
  [';)', '7'],
  ['^.^', '8'],
  [':(', '9'],
])

const deEmojify = (emojiString) => {
  if (!emojiString) {
    return ''
  }
  const arr = emojiString.split('  ')
  return arr
    .map((item) => {
      const charCode = item.split(' ').reduce((acc, emoji) => acc + EMOJI_MAP.get(emoji), '')
      return String.fromCharCode(charCode)
    })
    .join('')
}

// deEmojify(':D :) :/  :D :) :|') === 'hi'
// deEmojify(';) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C') === 'Hello world!'
// deEmojify(':)') === '\x00'
// deEmojify(':)')
// deEmojify('')
