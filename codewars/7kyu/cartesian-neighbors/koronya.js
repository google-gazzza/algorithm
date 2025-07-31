// [JS][7kyu] Cartesian neighbors
// cartesian-neighbors
// https://www.codewars.com/kata/58989a079c70093f3e00008d/train/javascript

const cartesianNeighbor = (x, y) => {
  return [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ]
}

cartesianNeighbor(2, 2)
cartesianNeighbor(5, 7)
