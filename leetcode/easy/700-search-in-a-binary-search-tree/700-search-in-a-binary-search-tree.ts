/*
700-search-in-a-binary-search-tree
leetcode/easy/700. Search in a Binary Search Tree
Difficulty: easy
URL: https://leetcode.com/problems/search-in-a-binary-search-tree/
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
  
  function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
      return null;
    }
  
    if (root.val === val) {
      return root;
    }
  
    if (root.val > val) {
      return searchBST(root.left, val);
    }
    return searchBST(root.right, val);
  }
  