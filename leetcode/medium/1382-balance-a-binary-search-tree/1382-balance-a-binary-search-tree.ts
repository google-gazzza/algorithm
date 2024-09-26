/*
1382-balance-a-binary-search-tree
leetcode/medium/1382. Balance a Binary Search Tree
URL: https://leetcode.com/problems/balance-a-binary-search-tree/description/

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

function parseTree(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  return [
    ...parseTree(root.left),
    root.val,
    ...parseTree(root.right),
  ];
}

function buildTree(values: number[]): TreeNode | null {
  if (values.length === 0) {
    return null;
  }

  const mid = Math.floor(values.length / 2);

  return new TreeNode(
    values[mid],
    buildTree(values.slice(0, mid)),
    buildTree(values.slice(mid + 1)),
  );
}

function balanceBST(root: TreeNode | null): TreeNode | null {
  const values = parseTree(root);
  values.sort((a, b) => a - b);

  return buildTree(values);
}
