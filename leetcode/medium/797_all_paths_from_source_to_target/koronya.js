// https://leetcode.com/problems/all-paths-from-source-to-target
// Runtime: 104 ms, faster than 77.95% of JavaScript online submissions for All Paths From Source to Target.
// Memory Usage: 44 MB, less than 100.00% of JavaScript online submissions for All Paths From Source to Target.
// with memoization
const allPathsSourceTarget = graph => {
  if (graph[0].length === 0) {
    return []
  }
  const lastIndex = graph.length - 1
  const koroMap = new Map()
  const koro = num => {
    if (koroMap.get(num)) {
      return koroMap.get(num)
    }
    const returnArr = []
    const nextArr = graph[num]
    if (num !== lastIndex) {
      nextArr.map(item => {
        koro(item).map(nextText => {
          returnArr.push([num, ...nextText])
        })
      })
    } else {
      returnArr.push([num])
    }
    koroMap.set(num, returnArr)
    return returnArr
  }
  return koro(0)
}

// Runtime: 120 ms, faster than 41.03% of JavaScript online submissions for All Paths From Source to Target.
// Memory Usage: 48 MB, less than 33.33% of JavaScript online submissions for All Paths From Source to Target.
// without memoization
const allPathsSourceTarget2 = graph => {
  if (graph[0].length === 0) {
    return []
  }
  const lastIndex = graph.length - 1
  const koro = num => {
    const returnArr = []
    const nextArr = graph[num]
    if (num !== lastIndex) {
      nextArr.map(item => {
        koro(item).map(nextText => {
          returnArr.push([num, ...nextText])
        })
      })
    } else {
      returnArr.push([num])
    }
    return returnArr
  }
  return koro(0)
}
