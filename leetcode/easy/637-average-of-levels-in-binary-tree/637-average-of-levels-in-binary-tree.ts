/*
637-average-of-levels-in-binary-tree
leetcode/easy/637. Average of Levels in Binary Tree
URL: https://leetcode.com/problems/average-of-levels-in-binary-tree/

NOTE: Description

NOTE: Constraints
  - The number of nodes in the tree is in the range [1, 104].
  - -231 <= Node.val <= 231 - 1

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

function averageOfLevels(root: TreeNode | null): number[] {
  const result: number[] = [];

  let currentLevel = [root];
  while (currentLevel.length > 0) {
    const nextLevel: TreeNode[] = [];
    const levelSum = currentLevel.reduce((acc, curr) => {
      if (curr.left) {
        nextLevel.push(curr.left);
      }
      if (curr.right) {
        nextLevel.push(curr.right);
      }
      return acc + curr.val;
    }, 0);
    result.push(levelSum / currentLevel.length);

    currentLevel = nextLevel;
  }

  return result;
};
