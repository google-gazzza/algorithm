// https://leetcode.com/problems/roman-to-integer/
// 각각의 성능은 아래에 기법 1~3 까지에 표시

const romanToInt = s => {
  const sLen = s.length
  let index = 0
  let sum = 0

  while (index < sLen) {
    const now = s[index]
    const next = s[index + 1]
    // const {value, passNext} = getNumber(now, next)
    // const {value, passNext} = getNumber2(now, next)
    const {value, passNext} = getNumber3(now, next)
    sum += value
    index += passNext ? 2 : 1
  }

  return sum
}

const symbolObj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
const exceptionI = ['V', 'X']
const exceptionX = ['L', 'C']
const exceptionC = ['D', 'M']

// Runtime: 148 ms, faster than 52.14% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 39.8 MB, less than 51.06% of JavaScript online submissions for Roman to Integer.
const getNumber3 = (now, next) => {
  if ((now === 'I' && (exceptionI.includes(next)))
    ||(now === 'X' && (exceptionX.includes(next)))
    ||(now === 'C' && (exceptionC.includes(next)))
  ) {
    return {value: symbolObj[next] - symbolObj[now], passNext: true}
  }
  return {value: symbolObj[now], passNext: false}
}


// Runtime: 156 ms, faster than 30.28% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 39.9 MB, less than 48.94% of JavaScript online submissions for Roman to Integer.
const getNumber = (now, next) => {
  switch (now) {
    case 'I':
      return next === 'V'
        ? {value: 4, passNext: true}
        : next === 'X'
          ? {value: 9, passNext: true}
          : {value: 1, passNext: false}
    case 'X':
      return next === 'L'
        ? {value: 40, passNext: true}
        : next === 'C'
          ? {value: 90, passNext: true}
          : {value: 10, passNext: false}
    case 'C':
      return next === 'D'
        ? {value: 400, passNext: true}
        : next === 'M'
          ? {value: 900, passNext: true}
          : {value: 100, passNext: false}
    case 'V':
      return {value: 5, passNext: false}
    case 'L':
      return {value: 50, passNext: false}
    case 'D':
      return {value: 500, passNext: false}
    case 'M':
      return {value: 1000, passNext: false}
    default:
      return {value: 77777, passNext: false}
  }
}

// Runtime: 132 ms, faster than 91.84% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 40 MB, less than 44.68% of JavaScript online submissions for Roman to Integer.
const getNumber2 = (now, next) => {
  if (now === 'I') {
    if (next === 'V') {
      return {value: 4, passNext: true}
    }
    if (next === 'X') {
      return {value: 9, passNext: true}
    }
    return {value: 1, passNext: false}
  }
  if (now === 'X') {
    if (next === 'L') {
      return {value: 40, passNext: true}
    }
    if (next === 'C') {
      return {value: 90, passNext: true}
    }
    return {value: 10, passNext: false}
  }
  if (now === 'C') {
    if (next === 'D') {
      return {value: 400, passNext: true}
    }
    if (next === 'M') {
      return {value: 900, passNext: true}
    }
    return {value: 100, passNext: false}
  }
  if (now === 'V') {
    return {value: 5, passNext: false}
  }
  if (now === 'L') {
    return {value: 50, passNext: false}
  }
  if (now === 'D') {
    return {value: 500, passNext: false}
  }
  if (now === 'M') {
    return {value: 1000, passNext: false}
  }
  return {value: 77777, passNext: false}
}
