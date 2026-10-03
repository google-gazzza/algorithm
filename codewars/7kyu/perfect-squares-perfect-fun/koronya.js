// [JS][7kyu] Perfect squares) === perfect fu
// perfect-squares-perfect-fun
// https://www.codewars.com/kata/5705ca6a41e5be67720012c0/train/javascript

const squareIt = (int) => {
  const strInt = String(int)
  const strIntLength = strInt.length
  const square = Math.sqrt(strIntLength)
  if (square % 1 !== 0) {
    return 'Not a perfect square!'
  }
  let start = 0
  const arr = []
  while (start < strIntLength) {
    arr.push(strInt.substring(start, start + square))
    start += square
  }
  return arr.join('\n')
}

squareIt(1) === '1'
squareIt(222) === 'Not a perfect square!'
squareIt(234562342342) === 'Not a perfect square!'
squareIt(88989) === 'Not a perfect square!'
squareIt(112141568) === '112\n141\n568'
squareIt(Number.MAX_SAFE_INTEGER) === '9007\n1992\n5474\n0991'

