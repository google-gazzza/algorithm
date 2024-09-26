// [JS][6kyu] Break camelCase
// break-camel-case
// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

const KEYCODE_OF_UPPER_A = 'A'.charCodeAt(0)
const KEYCODE_OF_UPPER_Z = 'Z'.charCodeAt(0)

const isUppercase = (str) => {
  const charCode = str.charCodeAt(0)
  return charCode >= KEYCODE_OF_UPPER_A && charCode <= KEYCODE_OF_UPPER_Z
}

const solution = (string) => {
  let result = ''
  for (const str of string) {
    if (isUppercase(str) === true) {
      result += ` ${str}`
    } else {
      result += str
    }
  }
  return result
}

solution('camelCasing')
solution('identifier')
solution('camelCasingTest')
solution('')
