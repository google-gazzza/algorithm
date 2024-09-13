// [JS][6kyu] Killer Garage Door
// killer-garage-door
// https://www.codewars.com/kata/58b1ae711fcffa34090000ea/train/javascript

const isStart = (position) => position === 0
const isLast = (position) => position === 5
const isStartOrLast = (position) => isStart(position) || isLast(position)

const door = (events) => {
  let position = 0
  let direction = 0
  let prevDirection = 0
  return events
    .split('')
    .map((event) => {
      if (direction !== 0) {
        prevDirection = direction
      }
      if (event === 'P') {
        if (!isStartOrLast(position)) {
          direction = direction === 0 ? prevDirection : 0
        } else {
          if (isStart(position)) {
            direction = 1
          } else {
            direction = -1
          }
        }
      } else if (event === 'O') {
        direction *= -1
      } else {
        if (isStartOrLast(position)) {
          direction = 0
        }
      }
      position += direction
      return position
    })
    .join('')
}

door('P......P......') === '12345554321000'

door('P.P.P....') === '122234555'

door('P.O....') === '1210000'

door('P..OP..P..') === '1232222100'

door('..P...O.....') === '001234321000'
