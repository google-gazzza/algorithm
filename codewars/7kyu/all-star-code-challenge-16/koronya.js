// [JS][7kyu] All Star Code Challenge #16
// all-star-code-challenge-16
// https://www.codewars.com/kata/586566b773bd9cbe2b000013/train/javascript

const noRepeat = (str) => {
  let index = 0
  const strMap = new Map()
  str.split('').forEach((char) => {
    strMap.set(char, (strMap.get(char) || 0) + 1)
  })
  let result = ''
  ;[...strMap].some(([char, count]) => {
    if (count === 1) {
      result = char
      return true
    }
    return false
  })
  return result
}

noRepeat('aabbccdde') === 'e'
noRepeat('wxyz') === 'w'
noRepeat('testing') === 'e'

