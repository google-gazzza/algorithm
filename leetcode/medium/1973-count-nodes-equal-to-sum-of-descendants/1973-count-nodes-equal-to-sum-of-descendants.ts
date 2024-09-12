/*
leetcode/medium/1973. Count Nodes Equal to Sum of Descendants
1973-count-nodes-equal-to-sum-of-descendants
uRL: https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/description/

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

function equalToDescendants(root: TreeNode | null): number {
  let count = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (node.val === left + right) {
      count += 1;
    }

    return node.val + left + right;
  }

  dfs(root);

  return count;
}
