"""https://leetcode.com/problems/same-tree/

Runtime: 28 ms, faster than 86.90% of Python3 online submissions for Same Tree.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Same Tree.
"""
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isNone(self, t: TreeNode) -> bool:
        return t is None
    
    def isNotNone(self, t: TreeNode) -> bool:
        return t is not None 
        
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        if self.isNone(p) and self.isNone(q): return True
        if self.isNotNone(p) and self.isNone(q): return False
        if self.isNone(p) and self.isNotNone(q): return False
        
        same_val = p.val == q.val
        return same_val and self.isSameTree(p.left,q.left) and self.isSameTree(p.right , q.right)
