// [JS][5kyu] Simple fraction to mixed number converter
// simple-fraction-to-mixed-number-converter
// https://www.codewars.com/kata/556b85b433fb5e899200003f/train/javascript

const getGcd = (a, b) => {
  if (a === 0) {
    return b
  }
  return getGcd(b % a, a)
}

const getReducedNumbers = (a, b) => {
  const gcd = getGcd(a, b)
  return [a / gcd, b / gcd]
}

const mixedFraction = (s) => {
  if (s === '0') {
    return '0'
  }
  const arrStr = s.split('/')
  const [numA, numB] = arrStr.map((str) => Math.abs(Number(str)))
  const [strA, strB] = arrStr
  const isMinus = (strA[0] === '-' && strB[0] !== '-') || (strA[0] !== '-' && strB[0] === '-')
  isMinus
  if (numB === 0) {
    throw 'Must raise ZeroDivisionError'
  } else if (numA === 0) {
    return '0'
  }
  const integerValue = Math.floor(numA / numB)
  const restValue = numA % numB
  const [reducedA, reducedB] = getReducedNumbers(restValue, numB)
  const signedStr = isMinus ? '-' : ''

  return `${signedStr}${integerValue ? integerValue : ''}${restValue ? `${integerValue ? ' ' : ''}${reducedA}/${reducedB}` : ''}`
}

// mixedFraction('42/9') === '4 2/3'
// mixedFraction('6/3') === '2'
// mixedFraction('1/1') === '1'
// mixedFraction('11/11') === '1'
// mixedFraction('4/6') === '2/3'
// mixedFraction('0/18891') === '0'
// mixedFraction('-10/7') === '-1 3/7'
// mixedFraction('-22/-7') === '3 1/7'
// mixedFraction('3/0')
mixedFraction('70/85')
mixedFraction('-70/85')
