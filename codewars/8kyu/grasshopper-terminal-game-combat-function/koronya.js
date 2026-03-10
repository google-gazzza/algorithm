// [JS][8kyu] Grasshopper - Terminal game combat function
// grasshopper-terminal-game-combat-function
// https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript

const combat = (health, damage) => {
  const value = health - damage
  return value < 0 ? 0 : value
}

combat(100, 5) === 95
combat(92, 8) === 84
combat(20, 30) === 0
