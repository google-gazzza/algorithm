// [JS][7kyu] The old switcheroo
// the-old-switcheroo
// https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript

const VOWEL_ARR = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
const vowel2index = (str) =>
  str
    .split('')
    .map((char, index) => (VOWEL_ARR.includes(char) ? index + 1 : char))
    .join('')

vowel2index('this is my string') === 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') === 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('Tomorrow is going to be raining') === 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng'
vowel2index('') === ''
