/*
235-lowest-common-ancestor-of-a-binary-search-tree
leetcode/easy/235. Lowest Common Ancestor of a Binary Search Tree
Difficulty: easy
URL: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

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
  
  
  function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root === null) {
      return null;
    }
  
    if ([p.val, q.val].includes(root.val)) {
      if (lowestCommonAncestor(root.left, p, q) || lowestCommonAncestor(root.right, p, q)) {
        return root;
      }
      return root;
    }
  
    if (lowestCommonAncestor(root.left, p, q) && lowestCommonAncestor(root.right, p, q)) {
      return root;
    }
  
    return lowestCommonAncestor(root.left, p, q) || lowestCommonAncestor(root.right, p, q);
  };
  