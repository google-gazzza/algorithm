// [JS][7kyu] Complete The Pattern #1
// complete-the-pattern-1
// https://www.codewars.com/kata/5572f7c346eb58ae9c000047/train/javascript

const getN = (n) => String(n).repeat(n)

const pattern = (n) => (n < 1 ? '' : Array.from({ length: n }, (_, i) => getN(i + 1)).join('\n'))

pattern(1) === '1'
pattern(2) === '1\n22'
pattern(5) === '1\n22\n333\n4444\n55555'
