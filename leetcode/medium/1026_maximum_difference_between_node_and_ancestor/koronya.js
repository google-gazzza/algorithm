// Runtime: 56 ms, faster than 89.14% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
// Memory Usage: 39.2 MB, less than 33.33% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor
const maxAncestorDiff = root => {
  let diffMax = Number.MIN_SAFE_INTEGER
  const preOrder = (node, max, min) => {
    if (node === null) {
      return
    }
    const nodeVal = node.val
    const newMax = Math.max(max, nodeVal)
    const newMin = Math.min(min, nodeVal)
    diffMax = Math.max(diffMax, newMax - newMin)
    preOrder(node.left, newMax, newMin)
    preOrder(node.right, newMax, newMin)
  }

  preOrder(root, root.val, root.val)
  return diffMax
}
