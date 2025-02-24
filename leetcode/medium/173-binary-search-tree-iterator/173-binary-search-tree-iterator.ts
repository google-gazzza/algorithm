/*
173-binary-search-tree-iterator
leetcode/medium/173. Binary Search Tree Iterator
URL: https://leetcode.com/problems/binary-search-tree-iterator/description/

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

class BSTIterator {
  private root: TreeNode | null;
  private preorderList: TreeNode[] = [];

  constructor(root: TreeNode | null) {
    this.root = root;
    this.preorderList = this.preorderTraversal(root);
  }

  private preorderTraversal(root: TreeNode | null): TreeNode[] {
    if (root === null) {
      return [];
    }

    const left = this.preorderTraversal(root.left);
    const right = this.preorderTraversal(root.right);

    return [...left, root, ...right];
  }

  next(): number {
    const node = this.preorderList.shift();
    return node.val;
  }

  hasNext(): boolean {
    return this.preorderList.length > 0;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
