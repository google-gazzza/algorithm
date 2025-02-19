// [JS][7kyu] Simple Fun #145: Table Game
// simple-fun-145-table-game
// https://www.codewars.com/kata/58aa7f18821a769a7d000190/train/javascript

const tableGame = (table) => {
  const a = table[0][0]
  const b = table[0][2]
  const c = table[2][0]
  const d = table[2][2]
  if (a + b + c + d === table[1][1] && a + b === table[0][1] && b + d === table[1][2] && c + d === table[2][1] && a + c === table[1][0]) {
    return [a, b, c, d]
  }
  return [-1]
}

tableGame([
  [1, 2, 1],
  [2, 4, 2],
  [1, 2, 1],
])
