// [JS][7kyu] Numbers with this digit inside
// numbers-with-this-digit-inside
// https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039/train/javascript

const numbersWithDigitInside = (x, d) => {
  const arr = Array.from({ length: x }, (_, i) => i + 1).filter((n) => String(n).includes(d))
  const arrLen = arr.length
  return arrLen > 0 ? [arrLen, arr.reduce((acc, curr) => acc + curr, 0), arr.reduce((acc, curr) => acc * curr, 1)] : [0, 0, 0]
}
  
numbersWithDigitInside(5, 6)
numbersWithDigitInside(1, 0)
numbersWithDigitInside(7, 6)
numbersWithDigitInside(11, 1)
numbersWithDigitInside(20, 0)
numbersWithDigitInside(44, 4)
