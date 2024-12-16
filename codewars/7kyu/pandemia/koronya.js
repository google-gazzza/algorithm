// [JS][7kyu] Pandemia
// pandemia
// https://www.codewars.com/kata/5e2596a9ad937f002e510435/train/javascript

const infected = (s) => {
  const arr = s.split('X').map((word) => ({ wordLen: word.length, isInfected: word.includes('1') }))
  const infectedLen = arr.filter((item) => item.isInfected).reduce((acc, cur) => acc + cur.wordLen, 0)
  const unInfectedLen = arr.filter((item) => !item.isInfected).reduce((acc, cur) => acc + cur.wordLen, 0)
  return infectedLen === 0 ? 0 : (infectedLen / (infectedLen + unInfectedLen)) * 100
}

// infected('01000000X000X011X0X')
// infected('01X000X010X011XX')
// infected('XXXXX')
// infected('0000000010')
// infected('X00X000000X10X0100')
