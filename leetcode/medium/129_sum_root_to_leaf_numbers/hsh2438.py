"""
https://leetcode.com/problems/sum-root-to-leaf-numbers/
Runtime: 28 ms, faster than 83.26% of Python3 online submissions for Sum Root to Leaf Numbers.
Memory Usage: 12.9 MB, less than 94.44% of Python3 online submissions for Sum Root to Leaf Numbers.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sumNumbers(self, root: TreeNode) -> int:
        if root is None:
            return 0
        
        leafs = []
        
        def travel(root, num):
            if root is None:
                return 
            
            num += str(root.val)
            
            if root.left is None and root.right is None:                
                leafs.append(num)
                return
            
            travel(root.left, num)
            travel(root.right, num)
        
        travel(root, '')
        
        return sum(list(map(int, leafs)))
                
