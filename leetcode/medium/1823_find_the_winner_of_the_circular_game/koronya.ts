// [Medium] 1823. Find the Winner of the Circular Game
// 1823_find_the_winner_of_the_circular_game

// https://leetcode.com/problems/find-the-winner-of-the-circular-game
// Runtime: 328 ms, faster than 6.67% of TypeScript online submissions for Find the Winner of the Circular Game.
// Memory Usage: 40.9 MB, less than 33.33% of TypeScript online submissions for Find the Winner of the Circular Game.

function findTheWinner(n: number, k: number): number {
  const arr: boolean[] = Array.from({ length: n }).map((_) => true)
  const modifyNextIndex = (index: number): number => (index === n - 1 ? 0 : index + 1)
  const getNextClockwiseIndex = (index: number): number => {
    let returnIndex: number = modifyNextIndex(index)
    while (arr[returnIndex] !== true) {
      returnIndex = modifyNextIndex(returnIndex)
    }
    return returnIndex
  }
  const getNextPersonIndex = (now: number): number => {
    let num: number = k - 1
    let index: number = now
    while (num > 0) {
      index = getNextClockwiseIndex(index)
      num -= 1
    }
    return index
  }
  let count: number = n
  let index: number = 0
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
