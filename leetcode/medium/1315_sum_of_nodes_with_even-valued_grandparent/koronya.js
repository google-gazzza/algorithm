// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent
// Runtime: 88 ms, faster than 61.31% of JavaScript online submissions for Sum of Nodes with Even-Valued Grandparent.
// Memory Usage: 46.9 MB, less than 100.00% of JavaScript online submissions for Sum of Nodes with Even-Valued Grandparent.
const sumEvenGrandparent = root => {
  let sum = 0

  const inorderRecursive = (root) => {
    if (root.val == null) {
      return
    }
    if (root.left !== null) {
      root.left.parent = root
      inorderRecursive(root.left)
    }
    if (root.parent && root.parent.parent && root.parent.parent.val % 2 === 0) {
      sum += root.val
    }
    if (root.right !== null) {
      root.right.parent = root
      inorderRecursive(root.right)
    }
  }
  inorderRecursive(root)

  return sum
}


function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
