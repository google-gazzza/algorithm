// [JS][8kyu] Double Char
// double-char
// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

const doubleChar = (str) => {
  let result = ''
  for (const d of str) {
    result += d
    result += d
  }
  return result
}

doubleChar('abcd') === 'aabbccdd'
doubleChar('1337') === '11333377'
doubleChar('1ab2') === '11aabb22'
