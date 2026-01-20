// [JS][6kyu] Find an area
// find-an-area
// https://www.codewars.com/kata/59b166f0a35510270800018d/train/javascript

class Point {
  #x
  #y

  get x() {
    return this.#x
  }
  get y() {
    return this.#y
  }

  constructor(x, y) {
    this.#x = x
    this.#y = y
  }
}

function findArea(points) {
  const limit = points.length - 1
  let result = 0
  for (let i = 0; i < limit; i += 1 || 0) {
    const [x1, y1] = [points[i].x, points[i].y]
    const [x2, y2] = [points[i + 1].x, points[i + 1].y]
    const belowY = Math.min(y1, y2)
    const triangleArea = ((x2 - x1) * Math.abs(y2 - y1)) / 2
    const squareArea = (x2 - x1) * belowY
    result += triangleArea + squareArea
  }

  return result
}

findArea([new Point(0, 0), new Point(1, 4), new Point(3, 2)]) === 8
findArea([new Point(-3, 0), new Point(-1, 4), new Point(3, 2)]) === 16
findArea([new Point(-3, 2), new Point(-1, 0), new Point(3, 2)]) === 6
findArea([new Point(-3, 2), new Point(3, 5)]) === 21
findArea([new Point(-3, 2), new Point(-1, 5), new Point(0, 3), new Point(3, 7), new Point(4, 6)]) === 32.5
