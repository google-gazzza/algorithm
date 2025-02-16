// [JS][7kyu] Turkish Numbers, 0-99
// turkish-numbers-0-99
// https://www.codewars.com/kata/5ebd53ea50d0680031190b96/train/javascript

const mappedObj = {
  0: 'sıfır',
  1: 'bir',
  2: 'iki',
  3: 'üç',
  4: 'dört',
  5: 'beş',
  6: 'altı',
  7: 'yedi',
  8: 'sekiz',
  9: 'dokuz',
  10: 'on',
  20: 'yirmi',
  30: 'otuz',
  40: 'kırk',
  50: 'elli',
  60: 'altmış',
  70: 'yetmiş',
  80: 'seksen',
  90: 'doksan',
}

const getTurkishNumber = (num) => {
  if (num === 0) return 'sıfır'
  const tens = Math.floor(num / 10) * 10
  const ones = num % 10
  const tensStr = tens > 0 ? mappedObj[tens] : ''
  const oneStr = ones > 0 ? ' ' + mappedObj[ones] : ''
  return `${tensStr}${oneStr}`.trim()
}

getTurkishNumber(0)
getTurkishNumber(16)
getTurkishNumber(70)
getTurkishNumber(26)
getTurkishNumber(1)
