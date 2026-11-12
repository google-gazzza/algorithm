// [JS][7kyu] Ordering the words!
// ordering-the-words
// https://www.codewars.com/kata/55d7e5aa7b619a86ed000070/train/javascript

const orderWord = (s) => {
  if (!s) {
    return 'Invalid String!'
  }
  return s
    .split('')
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join('')
}

orderWord('Hello, World!') === ' !,HWdellloor'
orderWord('bobby') === 'bbboy'
orderWord('b') === 'b'
orderWord('') === 'Invalid String!'
orderWord('completesolution') === 'ceeillmnooopsttu'
orderWord('"][@!$*(^&%') === '!"$%&(*@[]^'
orderWord('i"d][@z!$r(^a&world%') === '!"$%&(@[]^addilorrwz'
orderWord(null) === 'Invalid String!'
orderWord('cba') === 'abc'
orderWord('abc') === 'abc'

