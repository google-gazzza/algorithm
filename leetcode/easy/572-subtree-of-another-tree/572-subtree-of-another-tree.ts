// leetcode/easy/572. Subtree of Another Tree
// 572-subtree-of-another-tree
// URL: https://leetcode.com/problems/subtree-of-another-tree/description/

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

function isSameTree(a: TreeNode, b: TreeNode): boolean {
  if (a === null && b === null) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  if (a.val !== b.val) {
    return false;
  }

  return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  let currentQueue: TreeNode[] = [root];
  let nextQueue: TreeNode[] = [];

  while (currentQueue.length > 0) {
    const currentNode = currentQueue.shift();

    if (currentNode !== null) {
      if (isSameTree(currentNode, subRoot)) {
        return true;
      }
      nextQueue.push(currentNode.left);
      nextQueue.push(currentNode.right);
    }
    if (currentQueue.length === 0) {
      currentQueue = nextQueue;
      nextQueue = [];
    }
  }

  return false;
};
