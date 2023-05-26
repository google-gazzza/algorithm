// [Medium] 236. Lowest Common Ancestor of a Binary Tree
// 236_lowest_common_ancestor_of_a_binary_tree

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
// Runtime: 92 ms, faster than 55.42% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
// Memory Usage: 45.9 MB, less than 5.23% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
const lowestCommonAncestor = (root, p, q) => {
  if (root === null || root === p || root === q) {
    return root
  }
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  return left && right
    ? root
    : left || right
}
