// [JS][8kyu] String repeat
// string-repeat
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

const repeatStr = (n, s) => s.repeat(n)

repeatStr(3, '*') === '***'
repeatStr(5, '#') === '#####'
repeatStr(2, 'ha ') === 'ha ha '
