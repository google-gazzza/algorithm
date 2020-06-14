// https://leetcode.com/problems/binary-tree-level-order-traversal
// Runtime: 60 ms, faster than 73.01% of JavaScript online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 37.3 MB, less than 5.44% of JavaScript online submissions for Binary Tree Level Order Traversal.
const levelOrder = root => {
  const levelArr = []
  const inOrderTraversal = (node, level) => {
    if (node === null) {
      return
    }
    const val = node.val
    if (levelArr[level] === undefined) {
      levelArr[level] = [val]
    } else {
      levelArr[level].push(val)
    }
    inOrderTraversal(node.left, level + 1)
    inOrderTraversal(node.right, level + 1)
  }
  inOrderTraversal(root, 0)

  return levelArr
}
