// function TreeNode(val) {
//   this.val = val
//   this.left = this.right = null
// }

// https://leetcode.com/problems/search-in-a-binary-search-tree
// Runtime: 72 ms, faster than 95.22% of JavaScript online submissions for Search in a Binary Search Tree.
// Memory Usage: 41.9 MB, less than 25.00% of JavaScript online submissions for Search in a Binary Search Tree.
const searchBST = (root, val) => {
  while (root) {
    let rootVal = root.val
    if (val === rootVal) {
      return root
    }
    if (val < rootVal) {
      root = root.left
    } else {
      root = root.right
    }
  }
  return null
}
