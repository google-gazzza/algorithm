// [JS][7kyu] Exclamation marks series #5: Remove all exclamation marks from the end of words
// exclamation-marks-series-5-remove-all-exclamation-marks-from-the-end-of-words
// https://www.codewars.com/kata/57faf32df815ebd49e000117/train/javascript

const remove = (string) =>
  string
    .split(' ')
    .map((word) => word.replace(/!+$/, ''))
    .join(' ')

remove('Hi!') === 'Hi'
remove('Hi!!!') === 'Hi'
remove('!Hi') === '!Hi'
remove('!Hi!') === '!Hi'
remove('Hi! Hi!') === 'Hi Hi'
remove('!!!Hi !!hi!!! !hi') === '!!!Hi !!hi !hi'
