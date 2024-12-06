// [JS][7kyu] Simple string reversal
// simple-string-reversal
// https://www.codewars.com/kata/5a71939d373c2e634200008e/train/javascript

const solve = (str) => {
  const countArr = str.split(' ').map((word) => word.length)
  const reverseStr = str
    .split('')
    .filter((char) => char !== ' ')
    .reverse()
    .join('')
  let prev = 0
  const resultArr = countArr.map((count) => {
    const result = reverseStr.substring(prev, prev + count)
    prev += count
    return result
  })

  return resultArr.join(' ')
}

// solve('codewars') === 'srawedoc'
// solve('your code') === 'edoc ruoy'
// solve('your code rocks') === 'skco redo cruoy'
// solve('i love codewars') === 's rawe docevoli'
