"""
1038-binary-search-tree-to-greater-sum-tree
leetcode/medium/1038. Binary Search Tree to Greater Sum Tree
Difficulty: medium
URL: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def pre_order_traversal_for_collect_value(self, root, values):
        if root is None:
            return

        values.append(root.val)

        self.pre_order_traversal_for_collect_value(root.left, values)
        self.pre_order_traversal_for_collect_value(root.right, values)

    def pre_order_traversal_for_replace(self, root, values):
        if root is None:
            return

        root.val = sum(values[values.index(root.val):])

        self.pre_order_traversal_for_replace(root.left, values)
        self.pre_order_traversal_for_replace(root.right, values)

    def bstToGst(self, root: TreeNode) -> TreeNode:
        values = []

        self.pre_order_traversal_for_collect_value(root, values)
        values.sort()
        self.pre_order_traversal_for_replace(root, values)

        return root
