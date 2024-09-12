/*
leetcode/medium/1026. Maximum Difference Between Node and Ancestor
1026-maximum-difference-between-node-and-ancestor
uRL: https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

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

function maxAncestorDiff(root: TreeNode | null): number {
  let maxDiff: number = 0;

  function dfs(node: TreeNode | null, min: number, max: number) {
    if (node === null) {
      return;
    }

    maxDiff = Math.max(maxDiff, Math.abs(node.val - min), Math.abs(node.val - max));

    dfs(node.left, Math.min(min, node.val), Math.max(max, node.val));
    dfs(node.right, Math.min(min, node.val), Math.max(max, node.val));
  }

  dfs(root, root.val, root.val);

  return maxDiff;
}
