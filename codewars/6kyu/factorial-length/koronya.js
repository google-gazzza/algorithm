// [JS][6kyu] Factorial length
// factorial-length
// https://www.codewars.com/kata/59f34ec5a01431ab7600005a/train/javascript

const count = (n) => {
  let sum = 0
  for (let i = 1; i <= n; i += 1) {
    sum += Math.log10(i)
  }
  return Math.floor(sum) + 1
}

// count(5)
// count(50)
// count(500)
// count(5000)
// count(50000)
// count(500000)
// count(5000000)
