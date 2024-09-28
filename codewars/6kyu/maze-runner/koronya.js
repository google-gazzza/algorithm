// [JS][6kyu] Maze Runner
// maze-runner
// https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript

const getStartPoint = (maze) => {
  const row = maze.findIndex((row) => row.includes(2))
  const col = maze[row].findIndex((col) => col === 2)
  return [row, col]
}

const getNextPoint = (point, direction) => {
  const [row, col] = point
  switch (direction) {
    case 'N':
      return [row - 1, col]
    case 'E':
      return [row, col + 1]
    case 'S':
      return [row + 1, col]
    case 'W':
      return [row, col - 1]
  }
}

const mazeRunner = (maze, directions) => {
  let point = getStartPoint(maze)
  const mazeSize = maze.length
  while (directions.length > 0) {
    const direction = directions.shift()
    const [nextRow, nextCol] = getNextPoint(point, direction)
    if (nextRow < 0 || nextRow >= mazeSize || nextCol < 0 || nextCol >= mazeSize) {
      return 'Dead'
    }
    if (maze[nextRow][nextCol] === 1) {
      return 'Dead'
    }
    if (maze[nextRow][nextCol] === 3) {
      return 'Finish'
    }
    point = [nextRow, nextCol]
  }

  return 'Lost'
}

const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
]

mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E'])
mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E'])
mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W'])

mazeRunner(maze, ['N', 'N', 'N', 'W', 'W'])
mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S'])

mazeRunner(maze, ['N', 'E', 'E', 'E', 'E'])
