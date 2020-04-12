// https://leetcode.com/problems/baseball-game/
// Runtime: 44 ms, faster than 100.00% of JavaScript online submissions for Baseball Game.
// Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions for Baseball Game.
const calPoints = ops => {
  const opsStack = []
  const getSumOfLastTwoElements = () => {
    const opsStackLen = opsStack.length
    return opsStack[opsStackLen - 1] + opsStack[opsStackLen - 2]
  }
  const getDoubleOfLastElement = () => 2 * opsStack[opsStack.length - 1]
  ops.map(item => {
    switch (item) {
      case '+':
        opsStack.push(getSumOfLastTwoElements())
        break
      case 'D':
        opsStack.push(getDoubleOfLastElement())
        break
      case 'C':
        opsStack.pop()
        break
      default:
        opsStack.push(Number(item))
        break
    }
  })

  return opsStack.reduce((acc, cur) => acc + cur, 0)
}
