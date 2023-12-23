// [JS][5kyu] Street Fighter 2 - Character Selection - Part 2
// street-fighter-2-character-selection-part-2
// https://www.codewars.com/kata/58583922c1d5b415b00000ff/train/javascript

const getRightX = (fighters, position) => {
  const limitWidth = fighters[0].length - 1
  const [y, x] = position
  for (let i = x + 1; i <= limitWidth; i += 1) {
    if (fighters[y][i]) {
      return i
    }
  }
  for (let i = 0; i <= x; i += 1) {
    if (fighters[y][i]) {
      return i
    }
  }
  return x
}

const getLeftX = (fighters, position) => {
  const limitWidth = fighters[0].length - 1
  const [y, x] = position
  for (let i = x - 1; i >= 0; i -= 1) {
    if (fighters[y][i]) {
      return i
    }
  }
  for (let i = limitWidth; i >= x; i -= 1) {
    if (fighters[y][i]) {
      return i
    }
  }
  return x
}

const getNextPosition = (fighters, position, move) => {
  const limitHeight = fighters.length - 1
  const [y, x] = position
  let candidateY, realY
  switch (move) {
    case 'up':
      candidateY = y >= 1 ? y - 1 : y
      realY = fighters[candidateY][x] ? candidateY : y
      return [realY, x]
    case 'down':
      candidateY = y < limitHeight ? y + 1 : y
      realY = fighters[candidateY][x] ? candidateY : y
      return [realY, x]
    case 'right':
      return [y, getRightX(fighters, position)]
    case 'left':
      return [y, getLeftX(fighters, position)]
  }
}

const superStreetFighterSelection = (fighters, position, moves) => {
  let [y, x] = position
  return moves.map((move) => {
    const [candidateY, candidateX] = getNextPosition(fighters, [y, x], move)
    ;[y, x] = [candidateY, candidateX]
    return fighters[candidateY][candidateX]
  })
}

const fighters = [
  ['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
  ['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
  ['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
]
// const fighters = [
//   ['', 'Ryu', 'E.Honda', 'Cammy', 'Blanka', 'Guile', '', 'Chun Li'],
//   ['Balrog', 'Ken', 'Chun Li', '', 'M.Bison', 'Zangief', 'Dhalsim', 'Sagat'],
//   ['Vega', '', 'Fei Long', 'Balrog', 'Deejay', 'Cammy', '', 'T.Hawk'],
// ]

// superStreetFighterSelection(fighters, [1, 0], ['up', 'left', 'down', 'up'])
superStreetFighterSelection(fighters, [1, 0], ['down', 'down'])
// superStreetFighterSelection(fighters, [1, 0], ['down'])
// superStreetFighterSelection(fighters, [0, 2], ['left', 'left'])
// superStreetFighterSelection(fighters, [0, 1], ['left'])
// superStreetFighterSelection(fighters, [0, 2], ['left'])
// superStreetFighterSelection(fighters, [0, 3], ['right'])
// superStreetFighterSelection(fighters, [0, 4], ['right'])

// superStreetFighterSelection(fighters, [1, 1], ['left'])
// superStreetFighterSelection(fighters, [1, 1], ['left', 'left'])
// superStreetFighterSelection(fighters, [1, 0], ['left'])
// superStreetFighterSelection(fighters, [1, 5], ['down'])
// superStreetFighterSelection(fighters, [1, 5], ['down', 'down'])
// superStreetFighterSelection(fighters, [0, 2], ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'])
