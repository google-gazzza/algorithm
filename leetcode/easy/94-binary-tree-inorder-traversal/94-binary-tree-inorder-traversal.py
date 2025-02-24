"""
94-binary-tree-inorder-traversal
leetcode/easy/94. Binary Tree Inorder Traversal
Difficulty: easy
URL: https://leetcode.com/problems/binary-tree-inorder-traversal/
"""

from typing import List


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def traversal(self, root, result):
        if not root:
            return

        if root.left:
            self.traversal(root.left, result)

        result.append(root.val)

        if root.right:
            self.traversal(root.right, result)


    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        self.traversal(root, result)

        return result
