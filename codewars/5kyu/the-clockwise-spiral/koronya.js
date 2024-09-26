// [JS][5kyu] The Clockwise Spiral
// the-clockwise-spiral
// https://www.codewars.com/kata/536a155256eb459b8700077e

const getNextDirection = (direction) => {
  const directions = ['right', 'down', 'left', 'up']
  const idx = directions.indexOf(direction)
  return directions[(idx + 1) % 4]
}

const getNextPoint = (row, col, direction) => {
  switch (direction) {
    case 'right':
      return [row, col + 1]
    case 'down':
      return [row + 1, col]
    case 'left':
      return [row, col - 1]
    case 'up':
      return [row - 1, col]
  }
}

const createSpiral = (N) => {
  if (N < 1 || typeof N !== 'number' || N % 1 !== 0) {
    return []
  }
  const result = Array.from({ length: N }, () => Array.from({ length: N }, () => 0))
  let direction = 'right'
  let row = 0
  let col = 0
  let count = 0
  let limit = N * N
  while (count < limit) {
    count += 1
    result[row][col] = count
    const [nextRow, nextCol] = getNextPoint(row, col, direction)
    if (nextRow < 0 || nextRow >= N || nextCol < 0 || nextCol >= N || result[nextRow][nextCol] !== 0) {
      direction = getNextDirection(direction)
      const nextPoint = getNextPoint(row, col, direction)
      row = nextPoint[0]
      col = nextPoint[1]
    } else {
      row = nextRow
      col = nextCol
    }
  }
  return result
}

// createSpiral(2)
// createSpiral(1)
// createSpiral(3)
// createSpiral(4)
// createSpiral(5)
// createSpiral(4.5)
// createSpiral('2')
