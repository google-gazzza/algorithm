# 1602-find-nearest-right-node-in-binary-tree
# leetcode/medium/1602. Find Nearest Right Node in Binary Tree
# URL: https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def findNearestRightNode(self, root: TreeNode, u: TreeNode) -> Optional[TreeNode]:
        current_queue = [root]
        next_queue = []

        while current_queue:
            for i in range(len(current_queue)):
                node = current_queue.pop(0)
                if node == u:
                    return current_queue[0] if current_queue else None
                if node.left:
                    next_queue.append(node.left)
                if node.right:
                    next_queue.append(node.right)
            current_queue = next_queue
            next_queue = []

        return None
