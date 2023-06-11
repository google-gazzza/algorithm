// [JS][5kyu] Not very secure
// not-very-secure
// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript

const VALID_REG = /[a-zA-Z0-9]/

const alphanumeric = (string) => {
  if (string === '') {
    return false
  }
  return string.split('').every((item) => VALID_REG.test(item) === true)
}

alphanumeric('Mazinkaiser')
alphanumeric('hello world_')
alphanumeric('PassW0rd')
alphanumeric('     ')
