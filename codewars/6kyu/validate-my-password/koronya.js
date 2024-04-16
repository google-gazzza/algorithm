// [JS][6kyu] Validate my Password
// validate-my-password
// https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript

const REGEXP_ALPHABET = /[a-zA-Z]/
const REGEXP_NUMBER = /[0-9]/

const validPass = (password) => {
  const passwordLen = password.length
  if (passwordLen <= 3 || passwordLen >= 20) {
    return 'INVALID'
  }
  if (password.match(/[^a-zA-Z0-9]/)) {
    return 'INVALID'
  }
  return REGEXP_ALPHABET.test(password) && REGEXP_NUMBER.test(password) ? 'VALID' : 'INVALID'
}

validPass('Username123') === 'VALID'
validPass('Username') === 'INVALID'
validPass('1Username') === 'VALID'
validPass('123') === 'INVALID'
validPass('a12') === 'INVALID'
validPass('1234') === 'INVALID'
validPass('a123') === 'VALID'
validPass('Username123!') === 'INVALID'
validPass('passw0rdIsntTooLong') === 'VALID'
validPass('passw0rd1CharTooLong') === 'INVALID'
