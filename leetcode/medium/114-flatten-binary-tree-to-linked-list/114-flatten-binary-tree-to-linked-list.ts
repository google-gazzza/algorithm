// leetcode/medium/114. Flatten Binary Tree to Linked List
// 114-flatten-binary-tree-to-linked-list
// URL: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/


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


/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  const nodes = [];

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return;
    }

    nodes.push(node);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].left = null;
    nodes[i].right = nodes[i + 1];
  }
};
