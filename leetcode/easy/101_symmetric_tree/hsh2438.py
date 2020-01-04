"""
https://leetcode.com/problems/symmetric-tree/
Runtime: 28 ms, faster than 88.90% of Python3 online submissions for Symmetric Tree.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Symmetric Tree.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if root is None:
            return True
        
        def recursive(left, right):
            if left is None and right is None:
                return True
            elif left is None or right is None:
                return False
            elif left.val == right.val:
                return recursive(left.left, right.right) and recursive(left.right, right.left)
            else:
                return False
            
        return recursive(root.left, root.right)
