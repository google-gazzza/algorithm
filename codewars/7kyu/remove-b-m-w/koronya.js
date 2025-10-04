// [JS][7kyu] Remove B M W
// remove-b-m-w
// https://www.codewars.com/kata/59de795c289ef9197f000c48/train/javascript

const removeBMW = (str) => {
  if (typeof str !== 'string') {
    throw new Error('This program only works for text.')
  }

  return str
    .split('')
    .filter((c) => !'bBmMwW'.includes(c))
    .join('')
}

removeBMW(2)

removeBMW('bmwvolvoBMW') === 'volvo'
removeBMW('blablahblah') === 'lalahlah'
