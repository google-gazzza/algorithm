// [JS][7kyu] Fix My Phone Numbers!
// fix-my-phone-numbers
// https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript

const isItANum = (str) => {
  const result = str.replace(/\D/g, '')
  if (result.length !== 11 || result[0] !== '0') {
    return 'Not a phone number'
  }
  return result
}

isItANum('S:)0207ERGQREG88349F82!efRF)') === '02078834982'
isItANum('sjfniebienvr12312312312ehfWh') === 'Not a phone number'
isItANum('0192387415456') === 'Not a phone number'
isItANum('v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165') === '02084564165'
isItANum('stop calling me no I have never been in an accident') === 'Not a phone number'
