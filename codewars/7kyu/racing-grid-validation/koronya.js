// [JS][7kyu] Racing Grid Validation
// racing-grid-validation
// https://www.codewars.com/kata/692c80fa12006b05757089dd/train/javascript

const validateRace = (moves) => {
  const movesLength = moves.length
  const arr = moves.map((move, index) => {
    const sum = index + move
    if (sum < 0 || sum >= movesLength) {
      return null
    }
    return sum
  })
  const filteredArr = arr.filter((item) => item !== null)
  return movesLength === new Set(filteredArr).size
}

// validateRace([2, -1, -1])
// validateRace([0, 0, 0, 0, 0])

// validateRace([-1, 1, -1])
// validateRace([0, 1, 0])

// validateRace([4, 4, -2, -2, -3, 1, -2])
// validateRace([2, -2, 0])
