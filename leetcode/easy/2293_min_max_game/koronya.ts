// [Easy] 2293. Min Max Game
// 2293_min_max_game

// https://leetcode.com/problems/min-max-game
// Runtime: 111 ms, faster than 45.83% of TypeScript online submissions for Min Max Game.
// Memory Usage: 45.2 MB, less than 33.33% of TypeScript online submissions for Min Max Game.

const iter = (arr: number[]): number[] => {
  const arrLen = arr.length
  const result = []
  for (let i = 0; i < arrLen; i += 2 || 0) {
    if ((i / 2) % 2 === 0) {
      result.push(Math.min(...[arr[i], arr[i + 1]]))
    } else {
      result.push(Math.max(...[arr[i], arr[i + 1]]))
    }
  }
  return result
}

function minMaxGame(nums: number[]): number {
  let target = nums
  while (target.length > 1) {
    target = iter(target)
  }

  return target[0]
}
