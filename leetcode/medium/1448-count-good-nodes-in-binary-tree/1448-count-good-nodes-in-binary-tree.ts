/*
leetcode/medium/1448. Count Good Nodes in Binary Tree
1448-count-good-nodes-in-binary-tree
uRL: https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/

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


function depthFirstSearch(root: TreeNode | null, maxVal: number, total: number): number {
  if (root === null) {
    return 0;
  }

  if (root.val >= maxVal) {
    total += 1;
  }

  if (root.val > maxVal) {
    maxVal = root.val;
  }

  const left = depthFirstSearch(root.left, maxVal, 0);
  const right = depthFirstSearch(root.right, maxVal, 0);

  return left + right + total;
}

function goodNodes(root: TreeNode | null): number {
  return depthFirstSearch(root, root.val, 0);
}
