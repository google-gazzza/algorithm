// [JS][7kyu] The Office III - Broken Photocopier
// the-office-iii-broken-photocopier
// https://www.codewars.com/kata/57ed56657b45ef922300002b/train/javascript

const broken = (x) =>
  x
    .split('')
    .map((char) => (char === '0' ? '1' : '0'))
    .join('')

broken('1') === '0'
broken('10000000101101111110011001000') === '01111111010010000001100110111'
broken('100010') === '011101'
