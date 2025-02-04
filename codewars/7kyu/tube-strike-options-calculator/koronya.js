// [JS][7kyu] Tube strike options calculator
// tube-strike-options-calculator
// https://www.codewars.com/kata/568ade64cfd7a55d9300003e/train/javascript

const WALK_SPEED = 5
const BUS_SPEED = 8

const calculator = (distance, busDrive, busWalk) => {
  const busTime = busDrive / BUS_SPEED + busWalk / WALK_SPEED
  const walkTime = distance / WALK_SPEED
  if (walkTime > 2) {
    return 'Bus'
  }
  if (walkTime < 1 / 6) {
    return 'Walk'
  }
  return busTime < walkTime ? 'Bus' : 'Walk'
}

calculator(5, 6, 1) === 'Bus'
calculator(4, 5, 1) === 'Walk'
calculator(5, 8, 0) === 'Walk'
calculator(5, 4, 3) === 'Walk'
calculator(11, 15, 2) === 'Bus'
calculator(0.6, 0.4, 0) === 'Walk'
calculator(10, 0.4, 0) === 'Bus'
