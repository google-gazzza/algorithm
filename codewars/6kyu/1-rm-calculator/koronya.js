// [JS][6kyu] 1RM Calculator
// 1-rm-calculator
// https://www.codewars.com/kata/595bbea8a930ac0b91000130/train/javascript

const epley = (w, r) => Math.round(w * (1 + r / 30))
const mcGlothin = (w, r) => Math.round((100 * w) / (101.3 - 2.67123 * r))
const lombardi = (w, r) => Math.round(w * Math.pow(r, 0.1))

const calculate1RM = (w, r) => {
  if (r === 1) {
    return w
  }
  if (r === 0) {
    return 0
  }
  return Math.max(...[epley(w, r), mcGlothin(w, r), lombardi(w, r)])
}

calculate1RM(135, 20) === 282
calculate1RM(200, 8) === 253
calculate1RM(270, 2) === 289
calculate1RM(360, 1) === 360
calculate1RM(400, 0) === 0
