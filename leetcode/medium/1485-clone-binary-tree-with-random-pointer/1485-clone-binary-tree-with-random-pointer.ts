/*
1485-clone-binary-tree-with-random-pointer
leetcode/medium/1485. Clone Binary Tree With Random Pointer
URL: https://leetcode.com/problems/clone-binary-tree-with-random-pointer/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function createDFS(origianlRoot: Node, copyRoot: NodeCopy, originalNodeArray: Node[], copyNodeArray: NodeCopy[]) {
  if (origianlRoot === null) {
    return null;
  }
  copyRoot.val = origianlRoot.val;
  originalNodeArray.push(origianlRoot);
  copyNodeArray.push(copyRoot);

  if (origianlRoot.left !== null) {
    copyRoot.left = new NodeCopy();
    createDFS(origianlRoot.left, copyRoot.left, originalNodeArray, copyNodeArray);
  }

  if (origianlRoot.right !== null) {
    copyRoot.right = new NodeCopy();
    createDFS(origianlRoot.right, copyRoot.right, originalNodeArray, copyNodeArray);
  }
}

function setRandomNode(origianlNodeArray: Node[], copyNodeArray: NodeCopy[]) {
  for (let i = 0; i < origianlNodeArray.length; i += 1) {
    const origianlNode = origianlNodeArray[i];
    const copyNode = copyNodeArray[i];

    if (origianlNode.random !== null) {
      const randomIndex = origianlNodeArray.indexOf(origianlNode.random);
      copyNode.random = copyNodeArray[randomIndex];
    }
  }
}

function copyRandomBinaryTree(root: Node | null): NodeCopy | null {
  if (root === null) {
    return null;
  }

  const newRoot = new NodeCopy();
  const origianlNodeArray = [];
  const copyNodeArray = [];

  createDFS(root, newRoot, origianlNodeArray, copyNodeArray);
  setRandomNode(origianlNodeArray, copyNodeArray);

  return newRoot;
};
