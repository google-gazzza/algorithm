// eetcode/medium/298. Binary Tree Longest Consecutive Sequence
// 298-binary-tree-longest-consecutive-sequence
// URL: https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/description/?envType=study-plan-v2&envId=premium-algo-100

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


function longestConsecutive(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let max = 1;

  const dfs = (node: TreeNode | null, parent: TreeNode | null, consecutiveCount: number) => {
    if (node.val === parent.val + 1) {
      consecutiveCount++;
      if (consecutiveCount > max) {
        max = consecutiveCount;
      }
    } else {
      consecutiveCount = 1;
    }

    if (node.left) {
      dfs(node.left, node, consecutiveCount);
    }
    if (node.right) {
      dfs(node.right, node, consecutiveCount);
    }
  };

  dfs(root, root, 1);

  return max;
};
