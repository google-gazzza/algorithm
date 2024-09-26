/*
2331-evaluate-boolean-binary-tree
leetcode/easy/2331. Evaluate Boolean Binary Tree
URL: https://leetcode.com/problems/evaluate-boolean-binary-tree/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

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

function evaluateTree(root: TreeNode | null): boolean {
  if (!root.left && !root.right) {
    return !!root.val;
  }

  if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right);
  }

  return evaluateTree(root.left) && evaluateTree(root.right);
};
