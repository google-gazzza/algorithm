// [JS][6kyu] Challenge Fun #19: Black Hole
// challenge-fun-19-black-hole
// https://www.codewars.com/kata/58bd011fd0efbec33400001f/train/javascript

const blackHole = (n, a, b) => {
  const arr = Array.from(Array(n), () => Array(n).fill(0))
  const limit = n * n
  const get90Rotate = (x, y) => {
    return [y, n - 1 - x]
  }
  const getNextStart = () => {
    const rowIndex = arr.findIndex((row) => row.includes(0))
    const colIndex = arr[rowIndex].findIndex((col) => col === 0)
    return [rowIndex, colIndex]
  }

  let x = 0
  let y = 0
  arr[x][y] = 1
  for (let i = 1; i < limit; i += 1 || 0) {
    const [nextX, nextY] = get90Rotate(x, y)
    if (arr[nextX][nextY] !== 0) {
      const [nextX, nextY] = getNextStart()
      x = nextX
      y = nextY
    } else {
      x = nextX
      y = nextY
    }
    arr[x][y] = i + 1
  }

  return arr[a][b]
}

blackHole(4, 1, 1) === 13
blackHole(5, 3, 2) === 23
blackHole(5, 4, 2) === 11
