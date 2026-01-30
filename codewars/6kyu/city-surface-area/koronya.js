// [JS][6kyu] City Surface Area
// city-surface-area
// https://www.codewars.com/kata/693e7afc20e67d6a9ebdac5a/train/javascript

const getNormalSurfaceArea = (height) => height * 4 + 1
const getMin = (height1, height2) => Math.min(height1, height2)
const getValidSurroundingPositionsHeight = (x, y, map) => {
  const positions = []
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  directions.forEach(([dx, dy]) => {
    const newX = x + dx
    const newY = y + dy
    if (newX >= 0 && newX < map.length && newY >= 0 && newY < map[0].length) {
      positions.push([newX, newY])
    }
  })

  return positions.map(([newX, newY]) => map[newX][newY])
}

const citySurfaceArea = (_map) => {
  let result = 0
  _map.forEach((row, rowIndex) => {
    row.forEach((height, colIndex) => {
      const baseValue = getNormalSurfaceArea(height)
      const surroundingHeights = getValidSurroundingPositionsHeight(rowIndex, colIndex, _map)
      const minusValue = surroundingHeights.reduce((acc, h) => acc + getMin(height, h), 0)
      result += baseValue - minusValue
    })
  })
  return result
}

// citySurfaceArea([
//   [4, 2, 0],
//   [2, 1, 2],
//   [0, 2, 4],
// ])

// citySurfaceArea([[1, 2, 3]])

// citySurfaceArea([
//   [1, 0, 1],
//   [0, 1, 0],
//   [1, 0, 1],
// ])
