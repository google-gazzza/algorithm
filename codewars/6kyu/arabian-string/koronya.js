// [JS][6kyu] Arabian String
// arabian-string
// https://www.codewars.com/kata/525821ce8e7b0d240b002615/train/javascript

const REG_EXP = /([^a-zA-Z0-9])/g
const DELIMITER = ' '

const camelize = (str) => {
  return str
    .replace(REG_EXP, DELIMITER)
    .split(DELIMITER)
    .filter((word) => word !== '')
    .map((word) => {
      word
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
}

// camelize('java script') === 'JavaScript'
// camelize('cODE warS') === 'CodeWars'
// camelize('your-NaMe-here') === 'YourNameHere'
// camelize('f1 GFU0U,2Sf:fo jn') === 'F1Gfu0u2sfFoJn'
// camelize("odsL:wBJjoqwUJt3au;5mH?F'a;v3RyYIn2t") === 'OdslWbjjoqwujt3au5mhFAV3ryyin2t'
// camelize('I !Q8Rew ?MK;WHgidEz:T,!RudjK09l8Lj0mw:0F J;') === 'IQ8rewMkWhgidezTRudjk09l8lj0mw0fJ'
