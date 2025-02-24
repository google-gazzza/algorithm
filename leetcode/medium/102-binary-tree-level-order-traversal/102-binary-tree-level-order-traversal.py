"""
102-binary-tree-level-order-traversal
leetcode/easy/102. Binary Tree Level Order Traversal
Difficulty: medium
URL: https://leetcode.com/problems/binary-tree-level-order-traversal/
"""

from typing import List


# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        queue = []
        nextQueue = []
        queue.append(root)
        result = []
        temp = []

        while len(queue):
            node = queue.pop(0)

            if node:
                temp.append(node.val)
                nextQueue.append(node.left)
                nextQueue.append(node.right)

            if len(queue) == 0:
                filtered_result = [item for item in temp if item is not None]

                if len(filtered_result):
                    result.append(filtered_result)

                queue = nextQueue
                nextQueue = []
                temp = []

        return result
