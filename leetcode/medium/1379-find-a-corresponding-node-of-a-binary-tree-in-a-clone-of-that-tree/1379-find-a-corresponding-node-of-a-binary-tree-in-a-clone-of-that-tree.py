"""
1379-find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree
leetcode/medium/1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
difficulty: medium
URL: https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
"""

from typing import List


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def traversal(self, clonedNode, targetNode):
        queue = [clonedNode]
        nextQueue = []

        while queue:
            node = queue.pop()

            if node.val == targetNode.val:
                return node

            if node.left:
                nextQueue.append(node.left)

            if node.right:
                nextQueue.append(node.right)

            if not queue:
                [queue, nextQueue] = [nextQueue, []]

    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        return self.traversal(cloned, target)