// [JS][7kyu] Simple letter removal
// simple-letter-removal
// https://www.codewars.com/kata/5b728f801db5cec7320000c7/train/javascript

const removeCharFromString = (str, index) => {
  if (index < 0 || index >= str.length) {
    return str
  }
  return str.slice(0, index) + str.slice(index + 1)
}

const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)

const solve = (s, k) => {
  if (k <= 0 || s.length === 0) {
    return s
  }
  if (k >= s.length) {
    return ''
  }
  let targetCharCode = CHAR_CODE_OF_LOWER_A
  let str = s
  while (k > 0 && str.length > 0) {
    const index = str.indexOf(String.fromCharCode(targetCharCode))
    if (index === -1) {
      targetCharCode += 1
    } else {
      str = removeCharFromString(str, index)
      k -= 1
    }
  }
  return str
}

solve('abracadabra', 1) === 'bracadabra'
solve('abracadabra', 2) === 'brcadabra'
solve('abracadabra', 6) === 'rcdbr'
solve('abracadabra', 8) === 'rdr'
solve('abracadabra', 50) === ''
