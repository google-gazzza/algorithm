// [JS][7kyu] Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
// exclamation-marks-series-7-remove-words-from-the-sentence-if-it-contains-one-exclamation-mark
// https://www.codewars.com/kata/57fafb6d2b5314c839000195/train/javascript

const remove = (string) =>
  string
    .split(' ')
    .filter((str) => str.split('').filter((char) => char === '!').length !== 1)
    .join(' ')

remove('Hi!') === ''
remove('Hi! Hi!') === ''
remove('Hi! Hi! Hi!') === ''
remove('Hi Hi! Hi!') === 'Hi'
remove('Hi! !Hi Hi!') === ''
remove('Hi! Hi!! Hi!') === 'Hi!!'
remove('Hi! !Hi! Hi!') === '!Hi!'
