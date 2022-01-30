/*
257-binary-tree-paths
leetcode/easy/257. Binary Tree Paths
Difficulty: easy
URL: https://leetcode.com/problems/binary-tree-paths/
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
  
  
  function binaryTreePaths(root: TreeNode | null): string[] {
    const result = [];
  
    const depthFristSearch = (root: TreeNode | null, path: string[]) => {
      path.push(root.val.toString());
  
      if (root.left === null && root.right === null) {
        result.push(path);
        return;
      }
  
      if (root.left) {
        depthFristSearch(root.left, [...path]);
      }
  
      if (root.right) {
        depthFristSearch(root.right, [...path]);
      }
    };
  
    depthFristSearch(root, []);
  
    return result.map((e) => e.join('->'));
  };
  