// [Medium] 1823. Find the Winner of the Circular Game
// 1823_find_the_winner_of_the_circular_game

// https://leetcode.com/problems/find-the-winner-of-the-circular-game
// Runtime: 228 ms, faster than 18.67% of JavaScript online submissions for Find the Winner of the Circular Game.
// Memory Usage: 39.2 MB, less than 81.67% of JavaScript online submissions for Find the Winner of the Circular Game.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findTheWinner = function (n, k) {
  const arr = Array.from({ length: n }).map((_) => true)
  const modifyNextIndex = (index) => (index === n - 1 ? 0 : index + 1)
  const getNextClockwiseIndex = (index) => {
    let returnIndex = modifyNextIndex(index)
    while (arr[returnIndex] !== true) {
      returnIndex = modifyNextIndex(returnIndex)
    }
    return returnIndex
  }
  const getNextPersonIndex = (now) => {
    let num = k - 1
    let index = now
    while (num > 0) {
      index = getNextClockwiseIndex(index)
      num -= 1
    }
    return index
  }
  let count = n
  let index = 0
  while (count > 1) {
    index = getNextPersonIndex(index)
    arr[index] = false
    count -= 1
    index = getNextClockwiseIndex(index)
  }
  for (let i = 0; i < n; i += 1 || 0) {
    if (arr[i] === true) {
      return i + 1
    }
  }

  return -1
}

findTheWinner(5, 2) //?
findTheWinner(6, 5) //?
