// [JS][5kyu] Tic-Tac-Toe (3D)
// tic-tac-toe-3-d
// https://www.codewars.com/kata/5aa67541373c2e69a20000c9/train/javascript

const playOX3D = (moves) => {
  const isFinished = (point, player) => {
    const [x, y, z] = point
    const fourArr = Array.from({ length: 4 })
    const arr = [
      (_, index) => map.get(`${index},${y},${z}`) === player,
      (_, index) => map.get(`${x},${index},${z}`) === player,
      (_, index) => map.get(`${x},${y},${index}`) === player,
      (_, index) => map.get(`${index},${index},${z}`) === player,
      (_, index) => map.get(`${index},${y},${index}`) === player,
      (_, index) => map.get(`${x},${index},${index}`) === player,
      (_, index) => map.get(`${index},${index},${index}`) === player,
      (_, index) => map.get(`${index},${3 - index},${z}`) === player,
      (_, index) => map.get(`${index},${y},${3 - index}`) === player,
      (_, index) => map.get(`${x},${3 - index},${index}`) === player,
      (_, index) => map.get(`${index},${3 - index},${index}`) === player,
      (_, index) => map.get(`${index},${index},${3 - index}`) === player,
      (_, index) => map.get(`${3 - index},${index},${index}`) === player,
    ]

    return arr.some((func) => fourArr.every(func))
  }

  const map = new Map()
  const movesLen = moves.length
  for (let i = 0; i < movesLen; i += 1 || 0) {
    const point = moves[i]
    const [x, y, z] = point
    const player = i % 2 === 0 ? 'O' : 'X'
    map.set(`${x},${y},${z}`, player)
    if (isFinished(point, player)) {
      return `${player} wins after ${i + 1} moves`
    }
  }
  return 'No winner'
}

playOX3D([])

playOX3D([
  [0, 0, 0],
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
])
playOX3D([
  [0, 2, 1], // O
  [0, 2, 2],
  [1, 2, 1], // O
  [1, 2, 2],
  [2, 2, 1], // O
  [2, 2, 2],
  [3, 2, 1],
])

playOX3D([
  [0, 1, 1],
  [0, 0, 0], // X
  [0, 2, 2],
  [1, 1, 1], // X
  [1, 2, 2],
  [2, 2, 2], // X
  [2, 1, 2],
  [3, 3, 3], // X
  [0, 2, 1],
])

playOX3D([
  [0, 3, 0],
  [0, 0, 0], // X
  [1, 2, 0],
  [1, 1, 1], // X
  [2, 1, 0],
  [2, 2, 2], // X
  [3, 0, 0], // O
  [3, 3, 2], // X
  [0, 2, 1],
])
