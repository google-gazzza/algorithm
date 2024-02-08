// [JS][5kyu] Convert all the cases!
// convert-all-the-cases
// https://www.codewars.com/kata/59be8c08bf10a49a240000b1/train/javascript

const validCases = ['snake', 'kebab', 'camel']
const KEYCODE_OF_UPPER_A = 'A'.charCodeAt(0)
const KEYCODE_OF_UPPER_Z = 'Z'.charCodeAt(0)

const convertToCamel = (str) => {
  const arr = str.split('')
  const result = []
  arr.forEach((el, i) => {
    if (el === '-' || el === '_') {
      return
    }
    if (arr[i - 1] === '-' || arr[i - 1] === '_') {
      result.push(el.toUpperCase())
      return
    }
    result.push(el)
  })
  return result.join('')
}
const convertFromCamel = (str, to) => {
  const arr = str.split('')
  const result = []
  arr.forEach((el, i) => {
    if (el === el.toUpperCase()) {
      if (i === 0) {
        result.push(el.toLowerCase())
        return
      }
      result.push(`${to}${el.toLowerCase()}`)
      return
    }
    result.push(el)
  })
  return result.join('')
}

const isUpperCase = (char) => {
  const charCode = char.charCodeAt(0)
  return charCode >= KEYCODE_OF_UPPER_A && charCode <= KEYCODE_OF_UPPER_Z
}
const getSnakeCount = (str) => str.split('').filter((el) => el === '_').length
const getKebabCount = (str) => str.split('').filter((el) => el === '-').length
const getCamelCount = (str) => str.split('').filter((el) => isUpperCase(el) === true).length
const getNonZeroCount = (snakeCount, kebabCount, camelCount) => {
  let count = 0
  if (snakeCount > 0) {
    count += 1
  }
  if (kebabCount > 0) {
    count += 1
  }
  if (camelCount > 0) {
    count += 1
  }
  return count
}

const changeCase = (identifier, targetCase) => {
  if (validCases.includes(targetCase) === false) {
    return undefined
  }
  const kebabCount = getKebabCount(identifier)
  const snakeCount = getSnakeCount(identifier)
  const camelCount = getCamelCount(identifier)
  if (kebabCount === 0 && snakeCount === 0 && camelCount === 0) {
    return identifier
  }
  if (getNonZeroCount(snakeCount, kebabCount, camelCount) > 1) {
    return undefined
  }

  if (targetCase === 'camel') {
    return convertToCamel(identifier)
  }
  if (kebabCount > 0) {
    return targetCase === 'kebab' ? identifier : identifier.replace(/-/g, '_')
  }
  if (snakeCount > 0) {
    return targetCase === 'snake' ? identifier : identifier.replace(/_/g, '-')
  }
  if (camelCount > 0) {
    return targetCase === 'camel' ? identifier : convertFromCamel(identifier, targetCase === 'kebab' ? '-' : '_')
  }
}

changeCase('snakeCase', 'snake') === 'snake_case'
changeCase('some-lisp-name', 'camel') === 'someLispName'
changeCase('map_to_all', 'kebab') === 'map-to-all'
changeCase('doHTMLRequest', 'kebab') === 'do-h-t-m-l-request'
changeCase('invalid-inPut_bad', 'kebab') === undefined
changeCase('valid-input', 'huh???') === undefined
changeCase('', 'camel') === ''
