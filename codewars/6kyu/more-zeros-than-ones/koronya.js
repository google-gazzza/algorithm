// [JS][6kyu] More Zeros than Ones
// more-zeros-than-ones
// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript

const moreZeros = (s) => {
  const binaryArr = s.split('').map((char) => char.charCodeAt(0).toString(2))
  const zeroCount = binaryArr.map((bin) => bin.replace(/1/g, '').length)
  const oneCount = binaryArr.map((bin) => bin.replace(/0/g, '').length)
  const charSet = new Set()
  return s.split('').filter((char, i) => {
    if (charSet.has(char)) {
      return false
    }
    if (zeroCount[i] > oneCount[i]) {
      charSet.add(char)
      return true
    }
  })
}

// moreZeros('abcde') === ['a', 'b', 'd']
// moreZeros('Great job!') === ['a', ' ', 'b', '!']
// moreZeros('DIGEST') === ['D', 'I', 'E', 'T']
// moreZeros('abcdeabcde') === ['a', 'b', 'd']
