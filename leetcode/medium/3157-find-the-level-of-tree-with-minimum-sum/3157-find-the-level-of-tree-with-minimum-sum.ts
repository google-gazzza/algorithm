// 3157-find-the-level-of-tree-with-minimum-sum
// URL: https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/description/


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
  
  
  function minimumLevel(root: TreeNode | null): number {
    let minRowSum = Infinity;
    let level = 1;
    let minLevel = 1;
    let rowSum = 0;
    let currentRow = [root];
    let nextRow = [];
  
    while (currentRow.length > 0) {
      rowSum = 0;
  
      currentRow.forEach(node => {
        rowSum += node.val;
  
        if (node.left) {
          nextRow.push(node.left);
        }
  
        if (node.right) {
          nextRow.push(node.right);
        }
      });
  
      if (rowSum < minRowSum) {
        minRowSum = rowSum;
        minLevel = level;
      }
  
      level++;
      currentRow = nextRow;
      nextRow = [];
    }
  
    return minLevel;
  };
  