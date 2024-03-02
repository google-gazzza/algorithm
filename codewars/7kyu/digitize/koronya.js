// [JS][7kyu] Digitize
// digitize
// https://www.codewars.com/kata/5417423f9e2e6c2f040002ae/train/javascript

const digitize = (n) =>
  String(n)
    .split('')
    .map((item) => Number(item))

digitize(123)
digitize(1)
digitize(0)
digitize(1230)
digitize(8675309)
