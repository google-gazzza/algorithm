// [Medium] 831. Masking Personal Information
// 831_masking_personal_information

// https://leetcode.com/problems/masking-personal-information
// Runtime: 72 ms, faster than 80.00% of JavaScript online submissions for Masking Personal Information.
// Memory Usage: 36.6 MB, less than 86.67% of JavaScript online submissions for Masking Personal Information.
const CHAR_CODE_AT_0 = '0'.charCodeAt()
const CHAR_CODE_AT_9 = '9'.charCodeAt()
const LOCAL_NUMBER_LENGTH = 10

const maskPII = S => {
  if (S.includes('@') === true) {
    return convertEmail(S)
  }
  return convertPhoneNumber(S)
}

const convertEmail = S => {
  const [firstName, rest] = S.split('@').map(str => str.toLowerCase())
  const [middleName, lastName] = rest.split('.').map(str => str.toLowerCase())
  return firstName[0] + '*****' + firstName[firstName.length - 1] + '@' + middleName + '.' + lastName
}

const getCountryCode = numbersLen => {
  if (numbersLen === LOCAL_NUMBER_LENGTH) {
    return ''
  }
  let countryCode = ''
  for (let i = 0; i < numbersLen - LOCAL_NUMBER_LENGTH; i = i + 1 | 0) {
    countryCode += '*'
  }
  return '+' + countryCode + '-'
}

const convertPhoneNumber = S => {
  const numbers = S.split('').filter(char => {
    const charCode = char.charCodeAt()
    return charCode >= CHAR_CODE_AT_0 && charCode <= CHAR_CODE_AT_9
  })
  const numbersLen = numbers.length
  const countryCode = getCountryCode(numbersLen)
  let lastNumber = ''
  for (let i = numbersLen - 4; i < numbersLen; i = i + 1 | 0) {
    lastNumber += numbers[i]
  }

  return `${countryCode}***-***-${lastNumber}`
}
