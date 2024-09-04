// [JS][6kyu] Progressive Spiral Number Distance
// progressive-spiral-number-distance
// https://www.codewars.com/kata/5a27e3438882f334a10000e3/train/javascript

const getA = (n) => 1 + 4 * n * (n - 1)
const getSquareSize = (n) => {
  let index = 1
  let next = getA(index)
  while (n > next) {
    index += 1
    next = getA(index)
  }

  return index - 1
}
const getFirst = (n) => ({ right: n, down: n - 1 })
const getUpPosition = ({ right, down }) => ({ right, down: down - 1 })
const getLeftPosition = ({ right, down }) => ({ right: right - 1, down })
const getDownPosition = ({ right, down }) => ({ right, down: down + 1 })
const getRightPosition = ({ right, down }) => ({ right: right + 1, down })

const distance = (n) => {
  if (n === 1) {
    return 0
  }
  const squareSize = getSquareSize(n)
  const first = getFirst(squareSize)
  let { right, down } = first
  let direction = 'up'
  let target = getA(squareSize) + 1
  const getNext = ({ right, down }) => {
    switch (direction) {
      case 'up':
        if (down === -1 * squareSize) {
          direction = 'left'
          return getLeftPosition({ right, down })
        }
        return getUpPosition({ right, down })
      case 'left':
        if (right === -1 * squareSize) {
          direction = 'down'
          return getDownPosition({ right, down })
        }
        return getLeftPosition({ right, down })
      case 'down':
        if (down === squareSize) {
          direction = 'right'
          return getRightPosition({ right, down })
        }
        return getDownPosition({ right, down })
      case 'right':
        if (right === squareSize) {
          direction = 'up'
          return getUpPosition({ right, down })
        }
        return getRightPosition({ right, down })
    }
  }

  while (n !== target) {
    target += 1
    ;({ right, down } = getNext({ right, down }))
    // const dd = getNext({ right, down })
    // right = dd.right
    // down = dd.down
  }

  return Math.abs(right) + Math.abs(down)
}

distance(1) === 0
distance(5) === 2
distance(25) === 4
distance(30) === 5
distance(50) === 7
