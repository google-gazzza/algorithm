// https://leetcode.com/problems/univalued-binary-tree
// Runtime: 68 ms, faster than 30.06% of JavaScript online submissions for Univalued Binary Tree.
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Univalued Binary Tree.
const isUnivalTree = root => {
  let allSame = true
  let beforeVal = root.val
  const preOrderTraversal = node => {
    if (node === null || allSame === false) {
      return
    }
    if (node.val !== beforeVal) {
      allSame = false
      return
    }
    preOrderTraversal(node.left)
    preOrderTraversal(node.right)
  }
  preOrderTraversal(root)

  return allSame
}
