/*
2236-root-equals-sum-of-children
leetcode/easy/2236. Root Equals Sum of Children
URL: https://leetcode.com/problems/root-equals-sum-of-children/

NOTE: Description

NOTE: Constraints
  - The tree consists only of the root, its left child, and its right child.
  - -100 <= Node.val <= 100

NOTE: Explanation
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

function sumTree(root: TreeNode): number {
  if (!root) {
    return 0;
  }

  return root.val + sumTree(root.left) + sumTree(root.right);
}

function checkTree(root: TreeNode | null): boolean {
  return root.val === sumTree(root.left) + sumTree(root.right);
}