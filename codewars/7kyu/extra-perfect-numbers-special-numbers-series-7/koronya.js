// [JS][7kyu] Extra Perfect Numbers (Special Numbers Series #7)
// extra-perfect-numbers-special-numbers-series-7
// https://www.codewars.com/kata/5a662a02e626c54e87000123/train/javascript

const extraPerfect = (n) => {
  const result = []
  for (let i = 1; i <= n; i += 2) {
    result.push(i)
  }
  return result
}

extraPerfect(3)
extraPerfect(5)
extraPerfect(7)
extraPerfect(28)
extraPerfect(39)
