// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Runtime: 84 ms, faster than 6.19% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 37 MB, less than 75.00% of JavaScript online submissions for Maximum Depth of Binary Tree.
const maxDepth = root => {
  if (!root || root.val == null) {
    return 0
  }
  const queue = []
  queue.push({...root, depth: 1})
  let max = 1

  while (queue.length > 0) {
    const infoObj = queue.shift()
    const infoDepth = infoObj.depth
    if (infoDepth > max) {
      max = infoDepth
    }
    if (infoObj.left) {
      queue.push({...infoObj.left, depth: infoDepth + 1})
    }
    if (infoObj.right) {
      queue.push({...infoObj.right, depth: infoDepth + 1})
    }
  }
  return max
}
