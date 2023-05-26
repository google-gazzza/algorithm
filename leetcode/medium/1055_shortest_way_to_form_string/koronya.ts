// [Medium] 1055. Shortest Way to Form String
// 1055_shortest_way_to_form_string

// https://leetcode.com/problems/shortest-way-to-form-string
// Runtime: 104 ms, faster than 100.00% of TypeScript online submissions for Shortest Way to Form String.
// Memory Usage: 45.2 MB, less than 50.00% of TypeScript online submissions for Shortest Way to Form String.

function shortestWay(source: string, target: string): number {
  const targetLen = target.length
  let count = 1
  let targetIndex = 0
  let source2 = source
  while (targetIndex < targetLen) {
    if (source2 === '') {
      count += 1
      source2 = source
    }
    let targetStr = target[targetIndex]
    const findIndex = source2.indexOf(targetStr)
    if (findIndex === -1) {
      if (source2 === source) {
        return -1
      }
      source2 = ''
    } else {
      source2 = source2.slice(findIndex + 1)
      targetIndex += 1
    }
  }

  return count
}
