// [Easy] 800. Similar RGB Color
// 800_similar_rgb_color

// https://leetcode.com/problems/similar-rgb-color
// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Similar RGB Color.
// Memory Usage: 39.3 MB, less than 100.00% of JavaScript online submissions for Similar RGB Color.

const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)
const HEXA_DECIMAL_ALPHABET_ARR = ['a', 'b', 'c', 'd', 'e', 'f']

const mapper = (str) => {
  if (HEXA_DECIMAL_ALPHABET_ARR.includes(str)) {
    return str.charCodeAt(0) - CHAR_CODE_OF_LOWER_A + 10
  }
  return Number(str)
}

const getMinusOneMapper = (str) => {
  if (str === 'a') {
    return '9'
  }
  return HEXA_DECIMAL_ALPHABET_ARR.includes(str) === true ? String.fromCharCode(str.charCodeAt(0) - 1) : String(Number(str) - 1)
}

const getPlusOneMapper = (str) => {
  if (str === '9') {
    return 'a'
  }
  return HEXA_DECIMAL_ALPHABET_ARR.includes(str) === true ? String.fromCharCode(str.charCodeAt(0) + 1) : String(Number(str) + 1)
}

const getDecimalFromHexaDecimal = (str) => {
  return mapper(str[0]) * 16 + mapper(str[1])
}

const getMin = (str) => {
  const value = getDecimalFromHexaDecimal(str)
  const [first, last] = str
  if (first === last) {
    return str
  }
  const candidates = [[mapper(first) * 17, first]]
  if (first > last) {
    const prevValue = mapper(first) - 1
    candidates.push([prevValue * 17, getMinusOneMapper(first)])
  } else {
    const nextValue = mapper(first) + 1
    candidates.push([nextValue * 17, getPlusOneMapper(first)])
  }
  const diffA = Math.abs(value - candidates[0][0])
  const diffB = Math.abs(value - candidates[1][0])
  return diffA < diffB ? candidates[0][1].repeat(2) : candidates[1][1].repeat(2)
}

/**
 * @param {string} color
 * @return {string}
 */
const similarRGB = function (color) {
  return [color.substr(1, 2), color.substr(3, 2), color.substr(5, 2)].reduce((acc, cur) => acc + getMin(cur), '#')
}

similarRGB('#09f166') //?
similarRGB('#4e3fe1') //?

similarRGB('#71c986') //?
