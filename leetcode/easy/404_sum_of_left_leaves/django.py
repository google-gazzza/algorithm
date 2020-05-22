'''
https://leetcode.com/problems/sum-of-left-leaves/
Runtime: 48 ms, faster than 6.18% of Python3 online submissions for Sum of Left Leaves.
Memory Usage: 13.1 MB, less than 100.00% of Python3 online submissions for Sum of Left Leaves.
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        if root is None:
            return 0
        
        sumVal = 0
        
        if root.left is not None:
            sumVal += self.left(root.left)
            
        if root.right is not None:
            sumVal += self.right(root.right)
        
        return sumVal
        
        
    def left(self, root: TreeNode) -> int:
        if root.left is None and root.right is None:
            return root.val
        
        sumVal = 0
        
        if root.left is not None:
            sumVal += self.left(root.left)
            
        if root.right is not None:
            sumVal += self.right(root.right)
        
        return sumVal
        
    def right(self, root: TreeNode) -> int:
        if root.left is None and root.right is None:
            return 0
        
        sumVal = 0
        
        if root.left is not None:
            sumVal += self.left(root.left)
            
        if root.right is not None:
            sumVal += self.right(root.right)
        
        return sumVal 

