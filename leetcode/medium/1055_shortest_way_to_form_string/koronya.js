// [Medium] 1055. Shortest Way to Form String
// 1055_shortest_way_to_form_string

// https://leetcode.com/problems/shortest-way-to-form-string
// Runtime: 65 ms, faster than 91.80% of JavaScript online submissions for Shortest Way to Form String.
// Memory Usage: 42.4 MB, less than 90.16% of JavaScript online submissions for Shortest Way to Form String.

/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
const shortestWay = function (source, target) {
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

shortestWay('abc', 'abcbc')
shortestWay('abc', 'acdbc')
shortestWay('xyz', 'xzyxz')
