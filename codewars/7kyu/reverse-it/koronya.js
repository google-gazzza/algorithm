// [JS][7kyu] reverseIt
// reverse-it
// https://www.codewars.com/kata/557a2c136b19113912000010/train/javascript

const reverseIt = (data) => {
  if (typeof data === 'string') {
    return data.split('').reverse().join('')
  }
  if (typeof data === 'number') {
    return Number(String(data).split('').reverse().join(''))
  }
  if (Array.isArray(data)) {
    return data.reverse()
  }
  return data
}

reverseIt('Hello')
reverseIt(314159)
reverseIt('314159')
reverseIt([])
