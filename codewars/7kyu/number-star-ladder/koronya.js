// [JS][7kyu] Number-Star ladder
// number-star-ladder
// https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript

const getStar = (num) => '*'.repeat(num)
const pattern = (n) => Array.from({ length: n }, (_, i) => `1${getStar(i)}${i === 0 ? '' : i + 1}`).join('\n')

pattern(3)
pattern(7)
pattern(20)
