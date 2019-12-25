"""
https://leetcode.com/problems/path-sum/
Runtime: 44 ms, faster than 75.42% of Python3 online submissions for Path Sum.
Memory Usage: 14.4 MB, less than 100.00% of Python3 online submissions for Path Sum.
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        if root is None:
            return False

        leftval = sum - root.val

        if leftval == 0 and root.left is None and root.right is None:
            return True

        else:
            return self.hasPathSum(root.left, leftval) or self.hasPathSum(root.right, leftval)

