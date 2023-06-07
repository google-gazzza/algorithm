// [JS][7kyu] Switcheroo
// switcheroo
// https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript

const switcheroo = (x) =>
  x
    .split('')
    .map((item) => (item === 'a' ? 'b' : item === 'b' ? 'a' : item))
    .join('')

switcheroo('abc') === 'bac'
switcheroo('aaabcccbaaa') === 'bbbacccabbb'
switcheroo('ccccc') === 'ccccc'
