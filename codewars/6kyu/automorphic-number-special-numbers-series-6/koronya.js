// [JS][7kyu] Automorphic Number (Special Numbers Series #6)
// automorphic-number-special-numbers-series-6
// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

const automorphic = (n) => {
  const stringN = String(n)
  const stringNLen = stringN.length
  const squareN = String(Math.pow(n, 2))
  return squareN.slice(-stringNLen) === stringN ? 'Automorphic' : 'Not!!'
}

automorphic(1) === 'Automorphic'
automorphic(3) === 'Not!!'
automorphic(6) === 'Automorphic'
automorphic(9) === 'Not!!'
automorphic(25) === 'Automorphic'
automorphic(53) === 'Not!!'
automorphic(76) === 'Automorphic'
automorphic(95) === 'Not!!'
automorphic(625) === 'Automorphic'
automorphic(225) === 'Not!!'
