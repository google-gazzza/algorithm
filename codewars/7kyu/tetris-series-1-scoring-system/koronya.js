// [JS][7kyu] Tetris Series #1 — Scoring System
// tetris-series-1-scoring-system
// https://www.codewars.com/kata/5da9af1142d7910001815d32/train/javascript

const getFirstScoreOfLevel = (level) => 40 * (level + 1)
const arrayMap = new Map()
const getArrayOfLevel = (level) => {
  if (arrayMap.has(level)) {
    return arrayMap.get(level)
  }
  const firstScore = getFirstScoreOfLevel(level)
  const result = [firstScore, firstScore * 2.5, firstScore * 7.5, firstScore * 30]
  arrayMap.set(level, result)
  return result
}
const getAdjustPoint = (level, point) => getArrayOfLevel(level)[point - 1]

const getScore = (arr) => {
  let level = 0
  let levelScore = 0
  return arr.reduce((acc, cur) => {
    if (cur === 0) {
      return acc
    }
    const point = getAdjustPoint(level, cur)
    levelScore += cur
    if (levelScore >= 10) {
      level += 1
      levelScore %= 10
    }
    return acc + point
  }, 0)
}

// getScore([0, 1, 2, 3, 4]) === 1640
// getScore([0, 1, 1, 3, 0, 2, 1, 2]) === 620
// getScore([2, 0, 4, 2, 2, 3, 0, 0, 3, 3]) === 3300
// getScore([0]) === 0
// getScore([]) === 0
// getScore([2, 3, 3, 0, 2, 0, 1, 2, 3, 4, 1, 0, 1, 4, 4, 0, 4, 4, 2, 4, 1, 0, 2, 4, 2, 2, 3, 2, 0, 1, 3, 0, 2, 0, 4, 1]) === 49620
