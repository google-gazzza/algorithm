"""
https://leetcode.com/problems/deepest-leaves-sum/
Runtime: 96 ms, faster than 67.43% of Python3 online submissions for Deepest Leaves Sum.
Memory Usage: 16.3 MB, less than 100.00% of Python3 online submissions for Deepest Leaves Sum.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def deepestLeavesSum(self, root: TreeNode) -> int:
        
        leaves = []
        
        def search(root, depth):
            if root is None:
                return
            
            if root.left is None and root.right is None:
                leaves.append([root.val, depth])
                return
            
            if root.left:
                search(root.left, depth+1)
            
            if root.right:
                search(root.right, depth+1)
        
        search(root, 0)
                
        max_depth = 0
        result = 0
        for leaf in leaves:
            if leaf[1] > max_depth:
                max_depth = leaf[1]
                result = leaf[0]
            elif leaf[1] == max_depth:
                result += leaf[0]
        
        return result
