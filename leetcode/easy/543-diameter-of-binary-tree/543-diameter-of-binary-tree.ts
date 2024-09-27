/*
543-diameter-of-binary-tree
leetcode/easy/543. Diameter of Binary Tree
Difficulty: easy
URL: https://leetcode.com/problems/diameter-of-binary-tree/

NOTE: Description

NOTE: Constraints
  - The number of nodes in the tree is in the range [1, 104].
  - -100 <= Node.val <= 100

NOTE: Explanation
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  function depthFirstSearch(root: TreeNode | null): number {
    if (root === null) {
      return 0;
    }

    const left = depthFirstSearch(root.left);
    const right = depthFirstSearch(root.right);

    maxDiameter = Math.max(maxDiameter, left + right);

    return Math.max(left, right) + 1;
  }

  depthFirstSearch(root);

  return maxDiameter;
}
