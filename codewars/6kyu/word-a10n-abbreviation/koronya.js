// [JS][6kyu] Word a10n (abbreviation)
// word-a10n-abbreviation
// https://www.codewars.com/kata/5375f921003bf62192000746

const REGEX_ALPHA = /^[a-zA-Z]+$/
const isAlphabet = (str) => REGEX_ALPHA.test(str)

const getAbbreviateStr = (str) => {
  const strLen = str.length
  return strLen > 3 ? `${str[0]}${strLen - 2}${str[strLen - 1]}` : str
}

const abbreviate = (string) => {
  let result = ''
  const stringLen = string.length
  let accStr = ''
  for (let i = 0; i < stringLen; i += 1 || 0) {
    const str = string[i]
    if (isAlphabet(str) === true) {
      accStr += str
    } else {
      result += getAbbreviateStr(accStr)
      accStr = ''
      result += str
    }
  }
  if (accStr !== '') {
    result += getAbbreviateStr(accStr)
  }

  return result
}

abbreviate('internationalization') === 'i18n'
abbreviate('accessibility') === 'a11y'
abbreviate('Accessibility') === 'A11y'
abbreviate('elephant-ride') === 'e6t-r2e'
abbreviate('elephant-rides are really fun!') === 'e6t-r3s are r4y fun!'
