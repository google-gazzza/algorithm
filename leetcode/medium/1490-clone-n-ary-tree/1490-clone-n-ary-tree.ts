/*
1490-clone-n-ary-tree
leetcode/medium/1490. Clone N-ary Tree
Difficulty: medium
URL: https://leetcode.com/problems/clone-n-ary-tree/
 */
class Node {
    val: number;
    children: Node[];
  
    constructor(val?: number, children?: Node[]) {
      this.val = (val === undefined ? 0 : val);
      this.children = (children === undefined ? [] : children);
    }
  }
  
  
  const copyNode = (head: Node): Node => {
    const copyHead = new Node();
    copyHead.val = head.val;
  
    return copyHead;
  };
  
  function cloneTree(root: Node | null): Node | null {
    if (root === null) {
      return null;
    }
  
    const copyHead = copyNode(root);
  
    for (let childNode of root.children) {
      copyHead.children.push(cloneTree(childNode));
    }
  
    return copyHead;
  }
  
  