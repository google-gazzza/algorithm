// [Medium] 822. Card Flipping Game
// 822_card_flipping_game

// https://leetcode.com/problems/card-flipping-game
// Runtime: 117 ms, faster than 42.86% of JavaScript online submissions for Card Flipping Game.
// Memory Usage: 48.2 MB, less than 7.14% of JavaScript online submissions for Card Flipping Game.

/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
const flipgame = function (fronts, backs) {
  const frontsLen = fronts.length
  const frontMap = new Map()
  fronts.forEach((front, index) => {
    if (frontMap.has(front) === true) {
      frontMap.get(front).push(index)
    } else {
      frontMap.set(front, [index])
    }
  })
  const validFrontArr = [...frontMap].filter((item) => {
    const [key, arr] = item
    return arr.every((matchIndex) => backs[matchIndex] !== key)
  })
  validFrontArr.sort((a, b) => a[0] - b[0])
  const frontMin = validFrontArr[0] ? validFrontArr[0][0] : Number.MAX_SAFE_INTEGER
  let backMin = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < frontsLen; i += 1 || 0) {
    const num = backs[i]
    if (frontMap.has(num) === false) {
      backMin = Math.min(backMin, num)
    }
  }

  return frontMin === backMin && frontMin === Number.MAX_SAFE_INTEGER ? 0 : Math.min(frontMin, backMin)
}

flipgame([1, 2, 4, 4, 7], [1, 3, 4, 1, 3]) === 2
flipgame([1, 2, 4, 2, 7], [1, 3, 4, 1, 3]) === 2
flipgame([1], [1]) === 0
flipgame([1, 1], [2, 1]) === 2
