"""
https://leetcode.com/problems/same-tree/
Runtime: 44 ms, faster than 7.59% of Python3 online submissions for Same Tree.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Same Tree.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        
        def travel(p, q):
            if p is None and q is None:
                return True
            elif p is not None and q is not None:
                if p.val != q.val:
                    return False
                else:
                    return travel(p.left, q.left) and travel(p.right, q.right)
            else:
                return False
        
        return travel(p,q)
