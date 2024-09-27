// [JS][5kyu] Math Issues
// math-issues
// https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript

Math.round = function (number) {
  const residue = number % 1
  return residue < 0.5 ? Math.floor(number) : Math.ceil(number)
}

Math.ceil = function (number) {
  const residue = number % 1
  return residue === 0 ? number : number - residue + 1
}

Math.floor = function (number) {
  return number - (number % 1)
}

Math.round(0.4) === 0
Math.round(0.5) === 1
Math.ceil(0.4) === 1
Math.ceil(0.5) === 1
Math.floor(0.4) === 0
Math.floor(0.5) === 0
