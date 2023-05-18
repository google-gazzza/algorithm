// [JS][6kyu] Good vs Evil
// good-vs-evil
// https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

const GOOD_ARR = [1, 2, 3, 3, 4, 10]
const EVIL_ARR = [1, 2, 2, 2, 3, 5, 10]

const goodVsEvil = (good, evil) => {
  const sumOfGood = good.split(' ').reduce((acc, cur, index) => acc + cur * GOOD_ARR[index], 0)
  const sumOfEvil = evil.split(' ').reduce((acc, cur, index) => acc + cur * EVIL_ARR[index], 0)

  if (sumOfGood > sumOfEvil) {
    return 'Battle Result: Good triumphs over Evil'
  } else if (sumOfGood < sumOfEvil) {
    return 'Battle Result: Evil eradicates all trace of Good'
  }
  return 'Battle Result: No victor on this battle field'
}

goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') === 'Battle Result: Evil eradicates all trace of Good'
goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') === 'Battle Result: Good triumphs over Evil'
goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0') === 'Battle Result: No victor on this battle field'
