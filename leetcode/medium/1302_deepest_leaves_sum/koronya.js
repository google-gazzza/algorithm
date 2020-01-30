// https://leetcode.com/problems/deepest-leaves-sum
// Runtime: 68 ms, faster than 99.79% of JavaScript online submissions for Deepest Leaves Sum.
// Memory Usage: 42.4 MB, less than 100.00% of JavaScript online submissions for Deepest Leaves Sum.
const deepestLeavesSum = root => {
  if (root == null) {
    return 0
  }
  const resultMap = new Map()
  let maxDepth = Number.MIN_SAFE_INTEGER
  const inorderRecursive = (root, depth = 0) => {
    if (root.val == null) {
      return
    }
    if (root.left !== null) {
      inorderRecursive(root.left, depth + 1)
    }
    if (depth >= maxDepth) {
      maxDepth = depth
      if (resultMap.has(depth)) {
        resultMap.get(depth).push(root.val)
      } else {
        resultMap.set(depth, [root.val])
      }
    }
    if (root.right !== null) {
      inorderRecursive(root.right, depth + 1)
    }
  }
  inorderRecursive(root)
  return resultMap.get(maxDepth).reduce((acc, cur) => acc + cur, 0)
}
