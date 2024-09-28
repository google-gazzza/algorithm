// [JS][6kyu] Pokemon Damage Calculator
// pokemon-damage-calculator
// https://www.codewars.com/kata/536e9a7973130a06eb000e9f/train/javascript

const effectivenessMap = new Map()
// prettier-ignore
effectivenessMap.set('fire', new Map([['fire', 0.5], ['grass', 2], ['water', 0.5], ['electric', 1]]))
// prettier-ignore
effectivenessMap.set('grass', new Map([['fire', 0.5], ['grass', 0.5], ['water', 2], ['electric', 1]]))
// prettier-ignore
effectivenessMap.set('water', new Map([['fire', 2], ['grass', 0.5], ['water', 0.5], ['electric', 0.5]]))
// prettier-ignore
effectivenessMap.set('electric', new Map([['fire', 1], ['grass', 1], ['water', 2], ['electric', 0.5]]))

const calculateDamage = (yourType, opponentType, attack, defense) => {
  return 50 * (attack / defense) * effectivenessMap.get(yourType).get(opponentType)
}

calculateDamage('fire', 'water', 100, 100) === 25
calculateDamage('grass', 'water', 100, 100) === 100
calculateDamage('electric', 'fire', 100, 100) === 50
calculateDamage('grass', 'electric', 57, 19) === 150
calculateDamage('grass', 'water', 40, 40) === 100
calculateDamage('grass', 'fire', 35, 5) === 175
calculateDamage('fire', 'electric', 10, 2) === 250
