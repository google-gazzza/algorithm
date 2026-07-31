// [JS][7kyu] Dice Rotation
// dice-rotation
// https://www.codewars.com/kata/5ff2093d375dca00170057bc/train/javascript

const arr = [
  [0, 1, 1, 1, 1, 2],
  [1, 0, 1, 1, 2, 1],
  [1, 1, 0, 2, 1, 1],
  [1, 1, 2, 0, 1, 1],
  [1, 2, 1, 1, 0, 1],
  [2, 1, 1, 1, 1, 0],
]
const getDistance = (from, to) => arr[from - 1][to - 1]

const rotations = (dieArray) => {
  if (dieArray.length === 0) {
    return 0
  }
  const uniqueItems = new Set(dieArray)
  let min = Number.MAX_SAFE_INTEGER
  uniqueItems.forEach((uniqueItem) => {
    min = Math.min(
      min,
      dieArray.reduce((acc, curr) => acc + getDistance(curr, uniqueItem), 0),
    )
  })

  return min
}

rotations([1, 1, 6])
rotations([1, 2, 3])
rotations([3, 3, 3])
rotations([1, 6, 2, 3])
