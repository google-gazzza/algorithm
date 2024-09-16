// [JS][6kyu] Uncollapse Digits
// uncollapse-digits
// https://www.codewars.com/kata/5a626fc7fd56cb63c300008c/train/javascript

const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']
const digitMap = new Map(arr.map((word) => [word.slice(0, 3), word]))

const uncollapse = (digits) => {
  const result = []
  const digitsLen = digits.length
  let index = 0
  while (index < digitsLen) {
    const key = digits.slice(index, index + 3)
    const value = digitMap.get(key)
    result.push(value)
    index += value.length
  }
  return result.join(' ')
}

uncollapse('three') === 'three'
uncollapse('eightsix') === 'eight six'
uncollapse('fivefourseven') === 'five four seven'
uncollapse('ninethreesixthree') === 'nine three six three'
uncollapse('foursixeighttwofive') === 'four six eight two five'
