"""
144-binary-tree-preorder-traversal
leetcode/easy/144-binary-tree-preorder-traversal
Difficulty: easy
URL: 144. Binary Tree Preorder Traversal
"""

from typing import List


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root) -> List[int]:
        if root is None:
            return []

        result = [root.val]
        result.extend([*self.preorderTraversal(root.left), *self.preorderTraversal(root.right)])

        return result