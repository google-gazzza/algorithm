// [JS][6kyu] Case Reversal of Consecutive Duplicates
// case-reversal-of-consecutive-duplicates
// https://www.codewars.com/kata/577c2d68311a24132a0002a5/train/javascript

const convertCase = (char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())

const reverseCase = (string) => {
  const charArr = string.split('')
  let prev = charArr[0]
  let prevIndex = 0
  const convertIndexSet = new Set()
  for (let i = 1; i < charArr.length; i += 1 || 0) {
    if (charArr[i] === prev) {
      convertIndexSet.add(i)
      convertIndexSet.add(prevIndex)
    }
    prev = charArr[i]
    prevIndex = i
  }
  convertIndexSet

  return charArr.reduce((acc, cur, idx) => {
    if (convertIndexSet.has(idx)) {
      return acc + convertCase(cur)
    }
    return acc + cur
  }, '')
}

reverseCase('hello world') === 'heLLo world'
reverseCase('HELLO WORLD') === 'HEllO WORLD'
reverseCase('HeLlo World') === 'HeLlo World'
reverseCase('WWW') === 'www'
