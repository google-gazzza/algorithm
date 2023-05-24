// [JS][6kyu] Street Fighter 2 - Character Selection
// street-fighter-2-character-selectionsum
// https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/javascript

const streetFighterSelection = (fighters, position, moves) => {
  let [y, x] = position
  const [height, width] = [fighters.length, fighters[0].length]
  const result = []
  moves.forEach((move) => {
    switch (move) {
      case 'up':
        if (y !== 0) {
          result.push(fighters[y - 1][x])
          y -= 1
        } else {
          result.push(fighters[y][x])
        }
        break
      case 'down':
        if (y !== height - 1) {
          result.push(fighters[y + 1][x])
          y += 1
        } else {
          result.push(fighters[y][x])
        }
        break
      case 'left':
        if (x === 0) {
          result.push(fighters[y][width - 1])
          x = width - 1
        } else {
          result.push(fighters[y][x - 1])
          x -= 1
        }
        break
      case 'right':
        if (x === width - 1) {
          result.push(fighters[y][0])
          x = 0
        } else {
          result.push(fighters[y][x + 1])
          x += 1
        }
        break
    }
  })

  return result
}

const fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
]

// const moves = ['up', 'left', 'right', 'left', 'left']
const moves = ['up', 'left', 'right', 'left', 'left']

streetFighterSelection(fighters, [0, 0], moves)
