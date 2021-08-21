"""
145-binary-tree-postorder-traversal
leetcode/easy/145. Binary Tree Postorder Traversal
Difficulty:  easy
URL: https://leetcode.com/problems/binary-tree-postorder-traversal/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from typing import List


class Solution:
    def postorderTraversal(self, root) -> List[int]:
        if root is None:
            return []

        result = []

        result.extend(self.postorderTraversal(root.left))
        result.extend(self.postorderTraversal(root.right))
        result.append(root.val)

        return result
