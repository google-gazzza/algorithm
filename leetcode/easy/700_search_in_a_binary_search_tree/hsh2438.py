"""
https://leetcode.com/problems/search-in-a-binary-search-tree/
Runtime: 72 ms, faster than 83.63% of Python3 online submissions for Search in a Binary Search Tree.
Memory Usage: 14.7 MB, less than 100.00% of Python3 online submissions for Search in a Binary Search Tree.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def searchBST(self, root: TreeNode, val: int) -> TreeNode:
        if root is None:
            return None
        elif val == root.val:
            return root
        elif val > root.val:
            return self.searchBST(root.right, val)
        elif val < root.val:
            return self.searchBST(root.left, val)
