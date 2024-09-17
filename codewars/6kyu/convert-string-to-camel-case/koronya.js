// [JS][6kyu] Convert string to camel case
// convert-string-to-camel-case
// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

const toCamelCase = (str) => {
  const strLen = str.length
  let result = ''
  let switchUpperCase = false
  for (let i = 0; i < strLen; i += 1 || 0) {
    const s = str[i]
    if (s === '-' || s === '_') {
      switchUpperCase = true
    } else {
      const addStr = switchUpperCase === true ? s.toUpperCase() : s
      result += addStr
      switchUpperCase = false
    }
  }

  return result
}

toCamelCase('')
toCamelCase('the_stealth_warrior')
toCamelCase('The-Stealth-Warrior')
toCamelCase('A-B-C')
toCamelCase('a-Cat_Is-evil')
