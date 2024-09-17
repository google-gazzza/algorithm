// [JS][6kyu] Manhattan Distance
// manhattan-distance
// https://www.codewars.com/kata/52998bf8caa22d98b800003a/train/javascript

const manhattanDistance = (pointA, pointB) => {
  const [x1, y1] = pointA
  const [x2, y2] = pointB
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

manhattanDistance([1, 1], [1, 1]) === 0
manhattanDistance([5, 4], [3, 2]) === 4
manhattanDistance([1, 1], [0, 3]) === 3
