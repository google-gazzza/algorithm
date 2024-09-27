/*
1022-sum-of-root-to-leaf-binary-numbers
leetcode/easy/1022. Sum of Root To Leaf Binary Numbers
Difficulty: easy
URL: https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
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
  
  function sumRootToLeaf(root: TreeNode | null): number {
    const binaryNumbers: string[] = [];
  
    const postOrder = (node: TreeNode | null, binary: string = ''): void => {
      if (node === null) {
        return;
      }
  
      postOrder(node.left, binary + node.val);
      postOrder(node.right, binary + node.val);
  
      if (node.left === null && node.right === null) {
        binaryNumbers.push(binary + node.val);
      }
    };
  
    postOrder(root);
  
    return binaryNumbers.reduce((acc, curr) => acc + parseInt(curr, 2), 0);
  };
  