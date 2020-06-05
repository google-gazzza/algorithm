// https://leetcode.com/problems/build-an-array-with-stack-operations
// Runtime: 56 ms, faster than 79.82% of JavaScript online submissions for Build an Array With Stack Operations.
// Memory Usage: 33.8 MB, less than 84.53% of JavaScript online submissions for Build an Array With Stack Operations.
const buildArray = (target, n) => {
  const resultArr = []
  const nSet = new Set()
  const lastTarget = target[target.length - 1]
  for (let i = 0; i < lastTarget; i = i + 1 | 0) {
    nSet.add(i + 1)
  }
  target.map(item => nSet.delete(item))
  for (let i = 0; i < lastTarget; i = i + 1 | 0) {
    resultArr.push('Push')
    if (nSet.has(i + 1)) {
      resultArr.push('Pop')
    }
  }

  return resultArr
}
