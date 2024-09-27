// leetcode/easy/671. Second Minimum Node In a Binary Tree
// 671-second-minimum-node-in-a-binary-tree
// URL: https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/description/

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

function findSecondMinimumValue(root: TreeNode | null): number {
  const values: number[] = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (node) {
      values.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  const sortedValues: number[] = values.sort((a, b) => a - b);
  const minVal = sortedValues[0];
  const nextMinValue = sortedValues.find((val) => val > minVal);

  return nextMinValue || -1;
}
