// https://leetcode.com/problems/jump-game/
// Runtime: 4916 ms, faster than 5.02% of JavaScript online submissions for Jump Game.
// Memory Usage: 39.8 MB, less than 20.00% of JavaScript online submissions for Jump Game.

// BFS
const canJump = nums => {
  const numsLen = nums.length
  const queue = []
  const checkSet = new Set()
  const checkN = n => {
    const stepLen = nums[n]
    if (n + stepLen >= numsLen - 1) {
      return true
    }
    for (let i = 1; i <= stepLen; i += 1) {
      const nextIndex = n + i
      if (!checkSet.has(nextIndex)) {
        queue.push(nextIndex)
        checkSet.add(nextIndex)
      }
    }
  }

  queue.push(0)
  checkSet.add(0)

  while (queue.length > 0) {
    if (checkN(queue.shift())) {
      return true
    }
  }

  return false
}
