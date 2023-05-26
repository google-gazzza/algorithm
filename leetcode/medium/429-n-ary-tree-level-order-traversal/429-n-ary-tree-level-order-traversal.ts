/*
429-n-ary-tree-level-order-traversal
leetcode/medium/429. N-ary Tree Level Order Traversal
URL: https://leetcode.com/problems/n-ary-tree-level-order-traversal/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

 function levelOrder(root: Node | null): number[][] {
  const result = [];

  let currentQueue = [root];
  let nextQueue = [];

  if (root === null) {
    return result;
  }

  while (currentQueue.length) {
    const currentLevel = [];

    for (const node of currentQueue) {
      if (node === null) {
        continue;
      }

      currentLevel.push(node.val);

      for (const child of node.children) {
        nextQueue.push(child);
      }
    }

    result.push(currentLevel);

    currentQueue = nextQueue;
    nextQueue = [];
  }

  return result;
};
