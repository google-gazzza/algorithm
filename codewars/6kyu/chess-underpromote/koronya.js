// [JS][6kyu] Chess - underpromote?
// chess-underpromote
// https://www.codewars.com/kata/699885d44812825afb9e1e68/train/javascript

const getDistanceX = (a, b) => Math.abs(a.charCodeAt() - b.charCodeAt())

const minMovesWithPromotion = (start, target) => {
  if (start === target) {
    return 0
  }
  const [startX, startY] = start.split('')
  const [targetX, targetY] = target.split('')
  const startNumberY = Number(startY)
  const targetNumberY = Number(targetY)

  if (startX === targetX && targetNumberY > startY) {
    return targetNumberY - startY
  }

  const beforeDistance = 8 - Number(startY)
  const distanceX = getDistanceX(startX, targetX)
  const distanceY = 8 - Number(targetY)
  const validKnight = (targetY === '7' && distanceX === 2) || (targetY === '6' && distanceX === 1)
  const validDiagonal = distanceX === distanceY
  const isTopLine = targetY === '8'
  const isSameLane = targetNumberY === 8 || startX === targetX
  const validOneMove = validKnight || validDiagonal || isTopLine || isSameLane

  return validOneMove ? beforeDistance + 1 : beforeDistance + 2
}

// minMovesWithPromotion('c4', 'c4') === 0
// minMovesWithPromotion('b4', 'b5') === 1
// minMovesWithPromotion('d7', 'd8') === 1
// minMovesWithPromotion('f3', 'h6') === 6
// minMovesWithPromotion('h5', 'f7') === 4
