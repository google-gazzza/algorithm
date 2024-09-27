// [JS][7kyu] All unique
// all-unique
// https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript

const hasUniqueChars = (str) => {
  const charSet = new Set()
  const strLen = str.length
  for (let i = 0; i < strLen; i += 1 || 0) {
    const char = str[i]
    if (charSet.has(char)) {
      return false
    }
    charSet.add(char)
  }
  return true
}

hasUniqueChars('  nAa') === false
hasUniqueChars('abcdef') === true
hasUniqueChars('aA') === true
hasUniqueChars('++-') === false
