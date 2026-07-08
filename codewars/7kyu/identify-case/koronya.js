// [JS][7kyu] Identify Case
// identify-case
// https://www.codewars.com/kata/5819a6fdc929bae4f5000a33/train/javascript

const isLowerCaseString = (str) => str === str.toLowerCase()
const isUpperChar = (char) => char === char.toUpperCase()
const isCamel = (str) => {
  if (isUpperChar(str[0])) {
    return false
  }
  const upperIndexArr = str.split('').filter((char) => isUpperChar(char))
  if (upperIndexArr.length === 0) {
    return false
  }

  return true
}
const id = (cStr) => {
  console.log('cStr: ', cStr)
  const includeDash = cStr.includes('-')
  const includeUnder = cStr.includes('_')
  if (includeDash && includeUnder) {
    return 'none'
  }
  if (includeDash) {
    const arr = cStr.split('-')
    if (arr.every((item) => item !== '' && isLowerCaseString(item))) {
      return 'kebab'
    }
  }
  if (includeUnder) {
    const arr = cStr.split('_')
    if (arr.every((item) => item !== '' && isLowerCaseString(item))) {
      return 'snake'
    }
  }
  if (includeDash || includeUnder) {
    return 'none'
  }
  return isCamel(cStr) ? 'camel' : 'none'
}

// id('simscJpvRFgcgCwxtQkayg')
// id('he_lo-lo')

// id('hello-world') === 'kebab'
// id('hello-to-the-world') === 'kebab'

// id('hello_world') === 'snake'
// id('hello_to_the_world') === 'snake'

// id('helloWorld') === 'camel'
// id('helloToTheWorld') === 'camel'

// id('hello-World') === 'none'
// id('hello-To-The-World') === 'none'
// id('good-Night') === 'none'
// id('he--llo') === 'none'
