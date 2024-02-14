// [JS][7kyu] Two fighters, one winner.
// two-fighters-one-winner
// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

const declareWinner = (fighter1, fighter2, firstAttacker) => {
  const damage1 = fighter1.damagePerAttack
  let health1 = fighter1.health
  const name1 = fighter1.name
  const damage2 = fighter2.damagePerAttack
  let health2 = fighter2.health
  const name2 = fighter2.name
  let isTurnOf1 = name1 === firstAttacker
  while (health1 > 0 && health2 > 0) {
    if (isTurnOf1 === true) {
      health2 -= damage1
    } else {
      health1 -= damage2
    }
    isTurnOf1 = !isTurnOf1
  }

  return health1 <= 0 ? name2 : name1
}
