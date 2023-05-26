// [Easy] 2293. Min Max Game
// 2293_min_max_game

// https://leetcode.com/problems/min-max-game
// Runtime: 65 ms, faster than 95.00% of JavaScript online submissions for Min Max Game.
// Memory Usage: 44.5 MB, less than 15.71% of JavaScript online submissions for Min Max Game.

const iter = (arr) => {
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

/**
 * @param {number[]} nums
 * @return {number}
 */
const minMaxGame = function (nums) {
  let target = nums
  while (target.length > 1) {
    target = iter(target)
  }

  return target[0]
}

minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])
// minMaxGame([3])
