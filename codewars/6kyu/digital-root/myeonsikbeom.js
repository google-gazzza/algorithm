//6 kyu Sum of Digits / Digital Root
//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
function digitalRoot(n) {
  // ...
  if (n < 10) return parseInt(n)
  const result = String(n)
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b))
  return digitalRoot(result)
}
