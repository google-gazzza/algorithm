// https://leetcode.com/problems/maximum-number-of-balloons
// Runtime: 56 ms, faster than 90.13% of JavaScript online submissions for Maximum Number of Balloons.
// Memory Usage: 36.8 MB, less than 100.00% of JavaScript online submissions for Maximum Number of Balloons.
const SINGLE_ARR = ['a', 'b', 'n']
const DOUBLE_ARR = ['l', 'o']

const maxNumberOfBalloons = text => {
  let count = 0
  const singleMap = new Map([['a', 0], ['b', 0], ['n', 0]])
  const doubleMap = new Map([['l', 0], ['o', 0]])

  for (const item of text) {
    if (SINGLE_ARR.includes(item)) {
      singleMap.set(item, singleMap.get(item) + 1)
    } else if (DOUBLE_ARR.includes(item)) {
      doubleMap.set(item, doubleMap.get(item) + 1)
    }
  }

  let adjustSingleArr = []
  let adjustDoubleArr = []
  singleMap.forEach(value => adjustSingleArr.push(value))
  doubleMap.forEach(value => adjustDoubleArr.push(value))

  // singleMap의 모든게 1이상, doubleMap의 모든게 2이상이 아니면 중지!
  while (adjustSingleArr.every(item => item > 0) && adjustDoubleArr.every(item => item > 1)) {
    adjustSingleArr = adjustSingleArr.map(item => item - 1)
    adjustDoubleArr = adjustDoubleArr.map(item => item - 2)
    count += 1
  }

  return count
}
