// [JS][8kyu] altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// alt-e-rna-t-ing-c-as-e-al-ter-n-ati-ng-ca-se
// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

const KEYCODE_OF_LOWER_A = 'a'.charCodeAt(0)
const KEYCODE_OF_LOWER_Z = 'z'.charCodeAt(0)
const KEYCODE_OF_UPPER_A = 'A'.charCodeAt(0)
const KEYCODE_OF_UPPER_Z = 'Z'.charCodeAt(0)

const isLowerAlphabet = (str) => {
  const keycode = str.charCodeAt(0)
  return KEYCODE_OF_LOWER_A <= keycode && keycode <= KEYCODE_OF_LOWER_Z
}

const isUpperAlphabet = (str) => {
  const keycode = str.charCodeAt(0)
  return KEYCODE_OF_UPPER_A <= keycode && keycode <= KEYCODE_OF_UPPER_Z
}

String.prototype.toAlternatingCase = function () {
  let result = ''
  const strLen = this.length
  for (let i = 0; i < strLen; i += 1 || 0) {
    const str = this[i]
    const convertStr = isLowerAlphabet(str) ? str.toUpperCase() : isUpperAlphabet(str) ? str.toLowerCase() : str
    result += convertStr
  }
  return result
}

'hello WORLD'.toAlternatingCase()
