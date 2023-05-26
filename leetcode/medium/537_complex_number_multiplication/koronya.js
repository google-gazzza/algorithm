// https://leetcode.com/problems/complex-number-multiplication/
// Runtime: 56 ms, faster than 58.97% of JavaScript online submissions for Complex Number Multiplication.
// Memory Usage: 33.5 MB, less than 86.84% of JavaScript online submissions for Complex Number Multiplication.
const complexNumberMultiply = (a, b) => {
  const [c, di] = a.split('+')
  const [e, fi] = b.split('+')
  const d = di.substr(0, di.length - 1)
  const f = fi.substr(0, fi.length - 1)

  // (c+di)(e+fi) = ce - df + (cf + ed)i
  return `${c * e - d * f}+${c * f + e * d}i`
}
