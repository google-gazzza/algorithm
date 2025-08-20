// [JS][7kyu] Is valid identifier?
// is-valid-identifier
// https://www.codewars.com/kata/563a8656d52a79f06c00001f/train/javascript

const isValid = (idn) => {
  const validStart = /^[a-zA-Z_$]/
  const validChars = /^[a-zA-Z0-9_$]*$/
  return validStart.test(idn) && validChars.test(idn)
}

isValid('$dollar$igns') === true
isValid('_leading_UNDERSCORE') === true
isValid('camelCase') === true
isValid('PascalCase') === true
isValid('snake_case') === true
isValid('UPPER_SNAKE_CASE') === true
isValid('kebab-case') === false
isValid('1ok0okay') === false
isValid('!Ok') === false
isValid('') === false
isValid('no no') === false
