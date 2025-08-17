// [JS][7kyu] Figurate Numbers #2 - Pronic Number
// figurate-numbers-2-pronic-number
// https://www.codewars.com/kata/55b1e5c4cbe09e46b3000034/train/javascript

const isPronic = (n) => {
  // X * (X - 1) - n = 0
  // X^2 - X - n = 0
  // X = (1 ± √(1 + 4n)) / 2
  const x = (1 + Math.sqrt(1 + 4 * n)) / 2
  return Number.isInteger(x)
}

isPronic(0) === true
isPronic(1) === false
isPronic(2) === true
isPronic(3) === false
isPronic(4) === false
isPronic(5) === false
isPronic(6) === true
isPronic(-3) === false
isPronic(-27) === false
