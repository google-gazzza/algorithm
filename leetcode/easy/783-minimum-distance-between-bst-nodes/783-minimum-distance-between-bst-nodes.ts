// leetcode/easy/783. Minimum Distance Between BST Nodes
// 783-minimum-distance-between-bst-nodes
// URL: https://leetcode.com/problems/minimum-distance-between-bst-nodes/description/

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

function minDiffInBST(root: TreeNode | null): number {
  const arr: number[] = [];

  const preOrder = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }

    arr.push(node.val);
    preOrder(node.left);
    preOrder(node.right);
  };

  preOrder(root);

  arr.sort((a, b) => a - b);

  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < arr.length; i += 1) {
    min = Math.min(min, arr[i] - arr[i - 1]);
  }

  return min;
}