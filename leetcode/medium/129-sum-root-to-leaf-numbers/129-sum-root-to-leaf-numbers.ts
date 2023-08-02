// leetcode/medium/129. Sum Root to Leaf Numbers
// 129-sum-root-to-leaf-numbers
// URL: https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

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

function sumNumbers(root: TreeNode | null): number {
  const result: number[] = [];

  function breathFirstSearch(node: TreeNode | null, path: number[] = []) {
    if (!node) {
      return;
    }

    path.push(node.val);

    if (!node.left && !node.right) {
      result.push(parseInt(path.join('')));
    }

    breathFirstSearch(node.left, [...path]);
    breathFirstSearch(node.right, [...path]);
  }

  breathFirstSearch(root);

  return result.reduce((acc, cur) => acc + cur, 0);
}
