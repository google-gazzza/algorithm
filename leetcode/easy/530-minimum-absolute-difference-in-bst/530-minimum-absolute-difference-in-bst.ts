/*
530-minimum-absolute-difference-in-bst
leetcode/easy/530. Minimum Absolute Difference in BST
URL: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

NOTE: Description
NOTE: Constraints
  - The number of nodes in the tree is in the range [2, 104].
  - 0 <= Node.val <= 105

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

function depthFirstSearch(root: TreeNode | null, arr: number[]): number[] {
  if (root === null) {
    return arr;
  }
  arr.push(root.val);
  depthFirstSearch(root.left, arr);
  depthFirstSearch(root.right, arr);
  return arr;
}

function getMinimumDifference(root: TreeNode | null): number {
  const arr = depthFirstSearch(root, []);
  arr.sort((a, b) => a - b);

  let min = Number.MAX_VALUE;

  for (let i = 0; i < arr.length - 1; i += 1) {
    min = Math.min(min, Math.abs(arr[i + 1] - arr[i]));
  }

  return min;
}
