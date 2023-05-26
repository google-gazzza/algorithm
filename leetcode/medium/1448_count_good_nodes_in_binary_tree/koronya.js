// Runtime: 164 ms, faster than 100.00% of JavaScript online submissions for Count Good Nodes in Binary Tree.
// Memory Usage: 55.8 MB, less than 100.00% of JavaScript online submissions for Count Good Nodes in Binary Tree.
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
const goodNodes = root => {
  let count = 0
  const preOrderTraversal = (node, max = Number.MIN_SAFE_INTEGER) => {
    if (node === null) {
      return
    }
    const nodeVal = node.val
    if (max <= nodeVal) {
      count += 1
      max = nodeVal
    }
    preOrderTraversal(node.left, max)
    preOrderTraversal(node.right, max)
  }
  preOrderTraversal(root)

  return count
}
