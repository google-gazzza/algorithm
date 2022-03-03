// [Medium] 822. Card Flipping Game
// 822_card_flipping_game

// https://leetcode.com/problems/card-flipping-game
// Runtime: 110 ms, faster than 100.00% of TypeScript online submissions for Card Flipping Game.
// Memory Usage: 49.4 MB, less than 100.00% of TypeScript online submissions for Card Flipping Game.

function flipgame(fronts: number[], backs: number[]): number {
  const frontsLen = fronts.length
  const frontMap = new Map<number, number[]>()
  fronts.forEach((front, index) => {
    if (frontMap.has(front) === true) {
      frontMap.get(front)!.push(index)
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
  for (let i: number = 0; i < frontsLen; i += 1) {
    const num = backs[i]
    if (frontMap.has(num) === false) {
      backMin = Math.min(backMin, num)
    }
  }

  return frontMin === backMin && frontMin === Number.MAX_SAFE_INTEGER ? 0 : Math.min(frontMin, backMin)
}
