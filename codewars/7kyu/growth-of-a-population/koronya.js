// [JS][7kyu] Growth of a Population
// growth-of-a-population
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

const nbYear = (p0, percent, aug, p) => {
  let target = p0
  let year = 0
  while (target < p) {
    target += Math.floor(target * (percent / 100)) + aug
    year += 1
  }
  return year
}

nbYear(1500, 5, 100, 5000)
nbYear(1000, 10, 100, 1200)
nbYear(1000, 10, 100, 1100)
nbYear(1500000, 2.5, 10000, 2000000)

nbYear(1500000, 0.25, 1000, 2000000)
