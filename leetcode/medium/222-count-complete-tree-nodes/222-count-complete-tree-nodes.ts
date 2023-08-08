// leetcode/medium/222. Count Complete Tree Nodes
// 222-count-complete-tree-nodes
// URL: https://leetcode.com/problems/count-complete-tree-nodes/description/

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

function countNodes(root: TreeNode | null): number {
  function dfs(node: TreeNode) {
    if (!node) {
      return 0;
    }

    return 1 + dfs(node.left) + dfs(node.right);
  }

  return dfs(root);
}
