// [JS][7kyu] Simple equation reversal
// simple-equation-reversal
// https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript

const solve = (eq) =>
  eq
    .split(/([+\-*/])/)
    .reverse()
    .join('')

solve('100*b/y') === 'y/b*100'
solve('a+b-c/d*30') === '30*d/c-b+a'
solve('a*b/c+50') === '50+c/b*a'
