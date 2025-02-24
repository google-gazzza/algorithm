// 1214-two-sum-bsts
// URL: https://leetcode.com/problems/two-sum-bsts/description/?envType=study-plan-v2&envId=premium-algo-100


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
  
  function twoSumBSTs(root1: TreeNode | null, root2: TreeNode | null, target: number): boolean {
    const map1 = new Map<number, number>();
    const map2 = new Map<number, number>();
  
    const bfs = (root: TreeNode | null, map) => {
      if (!root) {
        return;
      }
  
      bfs(root.left, map);
      map.set(root.val, 1);
      bfs(root.right, map);
    };
  
    bfs(root1, map1);
    bfs(root2, map2);
  
    let result = false;
  
    map1.forEach((val, key) => {
      if (map2.has(target - key) && target - key !== key) {
        result = true;
        return;
      }
    });
  
    return result;
  };
  