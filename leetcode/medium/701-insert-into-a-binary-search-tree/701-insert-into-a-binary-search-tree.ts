/*
leetcode/medium/701. Insert into a Binary Search Tree
701-insert-into-a-binary-search-tree
uRL: https://leetcode.com/problems/insert-into-a-binary-search-tree/description/

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


function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  function insert(node: TreeNode | null, newNode: TreeNode): TreeNode | null {
    if (!node) {
      return newNode;
    }

    if (val < node.val) {
      node.left = insert(node.left, newNode);
    } else {
      node.right = insert(node.right, newNode);
    }

    return node;
  }

  return insert(root, new TreeNode(val));
}
