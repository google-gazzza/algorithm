// [JS][6kyu] IP Validation
// ip-validation
// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

const REGEX = /[^\d]/

const isValidIP = (str) => {
  const arr = str.split('.')
  if (arr.length !== 4) {
    return false
  }

  return arr.every((str) => {
    if (REGEX.test(str)) {
      return false
    }
    const strLen = str.length
    if (strLen < 1 || strLen > 3) {
      return false
    }

    if (strLen === 2) {
      if (str[0] === '0') {
        return false
      }
    }
    if (strLen === 3) {
      if (str[0] === '0' || (str[0] === '0' && str[1] === '0')) {
        return false
      }
    }

    const num = Number(str)
    if (num < 0 || num > 255) {
      return false
    }
    return true
  })
}

isValidIP('0.0.0.0') === true
isValidIP('12.255.56.1') === true
isValidIP('137.255.156.100') === true
isValidIP('') === false
isValidIP('abc.def.ghi.jkl') === false
isValidIP('123.456.789.0') === false
isValidIP('12.34.56') === false
isValidIP('01.02.03.04') === false
isValidIP('256.1.2.3') === false
isValidIP('1.2.3.4.5') === false
isValidIP('123,45,67,89') === false

isValidIP('1e0.1e1.1e2.2e2') === false
isValidIP(' 1.2.3.4') === false
isValidIP('1.2.3.4 ') === false
isValidIP('12.34.56.-7') === false
isValidIP('1.2.3.4\n') === false
isValidIP('\n1.2.3.4') === false
