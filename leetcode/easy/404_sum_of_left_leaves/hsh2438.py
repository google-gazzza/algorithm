"""
https://leetcode.com/problems/sum-of-left-leaves/
Runtime: 40 ms, faster than 6.82% of Python3 online submissions for Sum of Left Leaves.
Memory Usage: 14.4 MB, less than 7.69% of Python3 online submissions for Sum of Left Leaves.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        
        lefts = []
        
        def traversal(root, is_left):
            if root is None:
                return
            
            if is_left and root.left is None and root.right is None:
                lefts.append(root.val)
            
            if root.left:
                traversal(root.left, True)
            
            if root.right:
                traversal(root.right, False)
        
        traversal(root, False)
        
        return sum(lefts)
