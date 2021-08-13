"""
94-binary-tree-inorder-traversal
leetcode/easy/94. Binary Tree Inorder Traversal
Difficulty: easy
URL: https://leetcode.com/problems/binary-tree-inorder-traversal/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root):
        result = []

        def travle(root):
            if root is None:
                return

            if root.left is not None:
                travle(root.left)

            result.append(root.val)

            if root.right is not None:
                travle(root.right)

            return result

        return travle(root)


def test():
    pass
