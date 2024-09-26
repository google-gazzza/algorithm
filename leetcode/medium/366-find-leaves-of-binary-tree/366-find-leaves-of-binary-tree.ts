/*
366-find-leaves-of-binary-tree
leetcode/medium/366. Find Leaves of Binary Tree
URL: https://leetcode.com/problems/find-leaves-of-binary-tree/

NOTE: Description
NOTE: Constraints
  - 1 <= path.length <= 3000
  - path consists of English letters, digits, period '.', slash '/' or '_'.
  - path is a valid absolute Unix path.

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

function findLeaves(root: TreeNode | null): number[][] {
  const leaves: number[][] = [];

  function findLeavesHelper(treeNode: TreeNode | null, level: number): number | null {
    if (!treeNode) {
      return null;
    }

    if (!treeNode.left && !treeNode.right) {
      if (!leaves[level]) {
        leaves[level] = [];
      }

      leaves[level].push(treeNode.val);
      return level + 1;
    }

    const nextLevel = Math.max(
      findLeavesHelper(treeNode.left, level),
      findLeavesHelper(treeNode.right, level),
    );

    if (!leaves[nextLevel]) {
      leaves[nextLevel] = [];
    }

    leaves[nextLevel].push(treeNode.val);

    return nextLevel + 1;
  }

  findLeavesHelper(root, 0);

  return leaves;
}
