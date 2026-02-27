// [JS][7kyu] Talisman Board Game Combat System Checker
// talisman-board-game-combat-system-checker
// https://www.codewars.com/kata/541837036d821665ee0006c2/train/javascript

const getRequired = (player, enemy) => {
  const scorePlayer = player.reduce((a, b) => a + b, 0)
  const scoreEnemy = enemy.reduce((a, b) => a + b, 0)

  if (scorePlayer >= scoreEnemy + 6) {
    return 'Auto-win'
  }
  if (scoreEnemy >= scorePlayer + 6) {
    return 'Auto-lose'
  }
  if (scorePlayer === scoreEnemy) {
    return 'Random'
  }
  if (scoreEnemy === scorePlayer + 5) {
    return 'Pray for a tie!'
  }
  if (scorePlayer > scoreEnemy) {
    const start = scoreEnemy + 6 + 1 - scorePlayer
    const end = 6
    return `(${start}..${end})`
  }
  const start = 1
  const end = 6 - (scoreEnemy - scorePlayer) - 1
  return `(${start}..${end})`
}

getRequired([9, 1], [2, 0]) === 'Auto-win'
getRequired([1, 0], [7, 1]) === 'Auto-lose'
getRequired([5, 0], [4, 1]) === 'Random'
getRequired([7, 0], [8, 1]) === '(1..3)'
getRequired([4, 0], [6, 0]) === '(1..3)'
getRequired([7, 2], [6, 8]) === 'Pray for a tie!'
getRequired([8, 1], [3, 0]) === 'Auto-win'
getRequired([8, 0], [6, 0]) === '(5..6)'
getRequired([4, 3], [6, 0]) === '(6..6)'
