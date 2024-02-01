"""
https://leetcode.com/problems/count-complete-tree-nodes/
Runtime: 100 ms, faster than 16.95% of Python3 online submissions for Count Complete Tree Nodes.
Memory Usage: 21.3 MB, less than 6.90% of Python3 online submissions for Count Complete Tree Nodes.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def __init__(self):
        self.count = 0
        
    def countNodes(self, root: TreeNode) -> int:
        
        def travel(root):
            if root is None:
                return
            
            self.count += 1
            
            travel(root.left)
            travel(root.right)
    
        travel(root)
        
        return self.count
        
