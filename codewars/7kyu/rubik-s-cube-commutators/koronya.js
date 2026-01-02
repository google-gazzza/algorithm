// [JS][7kyu] Rubik's Cube Commutators
// rubik-s-cube-commutators
// https://www.codewars.com/kata/6939b1596fb89b7ec3d128ba/train/javascript

const invertItem = (move) => {
  if (move.endsWith('2')) {
    return move
  }
  return move.endsWith("'") ? move.slice(0, -1) : move + "'"
}

const createCommutator = (a, b) => {
  const arrA = a.split(' ')
  const arrB = b.split(' ')

  return [...arrA, ...arrB, ...arrA.reverse().map(invertItem), ...arrB.reverse().map(invertItem)].join(' ')
}

createCommutator('R F', "D2 L'") === "R F D2 L' F' R' L D2"
createCommutator('R', 'U') === "R U R' U'"
createCommutator("F' R U' D", "R U2 F B'") === "F' R U' D R U2 F B' D' U R' F B F' U2 R'"
