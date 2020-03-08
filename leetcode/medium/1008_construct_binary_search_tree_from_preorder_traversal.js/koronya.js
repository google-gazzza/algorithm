// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal
// Runtime: 68 ms, faster than 22.40% of JavaScript online submissions for Construct Binary Search Tree from Preorder Traversal.
// Memory Usage: 34.7 MB, less than 60.00% of JavaScript online submissions for Construct Binary Search Tree from Preorder Traversal.
const bstFromPreorder = preorder => {
  const [first, ...rest] = preorder
  const root = new TreeNode(first)
  const insertValue = (val, node) => {
    while (true) {
      if (val < node.val) {
        if (node.left === null) {
          node.left = new TreeNode(val)
          return
        } else {
          node = node.left
        }
      } else {
        if (node.right === null) {
          node.right = new TreeNode(val)
          return
        } else {
          node = node.right
        }
      }
    }
  }
  rest.map(item => {
    insertValue(item, root)
  })
  return root
}
