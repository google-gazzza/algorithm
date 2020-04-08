'''
https://leetcode.com/problems/path-sum-iii/
Runtime: 828 ms, faster than 35.94% of Python3 online submissions for Path Sum III.
Memory Usage: 13.6 MB, less than 90.91% of Python3 online submissions for Path Sum III.
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> int:
        if root is None: return 0
        return self.partPathSum(root, sum) + self.pathSum(root.left, sum) + self.pathSum(root.right, sum)
        
    def partPathSum(self, root: TreeNode, sum: int) -> int:
        if root is None: return 0
        next_val = sum - root.val
        res = 0
        
        if next_val == 0: res += 1
            
        return res + self.partPathSum(root.left, next_val) + self.partPathSum(root.right, next_val)