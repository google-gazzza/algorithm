// [JS][7kyu] Negation of a Value
// negation-of-a-value
// https://www.codewars.com/kata/58f6f87a55d759439b000073/train/javascript

const negationValue = (string, value) => {
  const negations = string.split('').filter((char) => char === '!').length
  return negations % 2 === 1 ? !value : !!value
}

// negationValue('!', false) === true
// negationValue('!', true) === false
// negationValue('!!!', []) === false
// negationValue('!!!!!!!!!!!!', []) === true
