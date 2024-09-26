// [Medium] 468. Validate IP Address
// 468_validate_ip_address

// https://leetcode.com/problems/validate-ip-address
// Runtime: 72 ms, faster than 88.57% of JavaScript online submissions for Validate IP Address.
// Memory Usage: 38.8 MB, less than 21.90% of JavaScript online submissions for Validate IP Address.
const MAX_DIGIT = 255
const CHAR_CODE_OF_0 = '0'.charCodeAt()
const CHAR_CODE_OF_9 = '9'.charCodeAt()
const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt()
const CHAR_CODE_OF_LOWER_F = 'f'.charCodeAt()
const CHAR_CODE_OF_UPPER_A = 'A'.charCodeAt()
const CHAR_CODE_OF_UPPER_F = 'F'.charCodeAt()

const isBetween = (start, end, value) => start <= value && end >= value
const isNumber = char => isBetween(CHAR_CODE_OF_0, CHAR_CODE_OF_9, char.charCodeAt())
const isBetweenLowerAtoF = char => isBetween(CHAR_CODE_OF_LOWER_A, CHAR_CODE_OF_LOWER_F, char.charCodeAt())
const isBetweenUpperAtoF = char => isBetween(CHAR_CODE_OF_UPPER_A, CHAR_CODE_OF_UPPER_F, char.charCodeAt())

const validIPv4 = IP => {
  const digits = IP.split('.')
  if (digits.length !== 4) {
    return false
  }
  return digits.every(item => {
    if (item === '0') {
      return true
    }
    if (item.length === 0 || item.startsWith('0')) {
      return false
    }
    const onlyNumber = [...item].every(str => isNumber(str))
    if (onlyNumber === false) {
      return false
    }
    return item <= MAX_DIGIT
  })
}

const validIPv6 = IP => {
  const digits = IP.split(':')
  if (digits.length !== 8) {
    return false
  }
  return digits.every(item => {
    const itemLen = item.length
    if (itemLen < 1 || itemLen > 4) {
      return false
    }
    return [...item].every(str => {
      return isNumber(str) || isBetweenLowerAtoF(str) || isBetweenUpperAtoF(str)
    })
  })
}

const validIPAddress = IP => {
  if (IP.includes('.')) {
    return validIPv4(IP) ? 'IPv4' : 'Neither'
  } else if (IP.includes(':')) {
    return validIPv6(IP) ? 'IPv6' : 'Neither'
  } else {
    return 'Neither'
  }
}
