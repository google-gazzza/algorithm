"""
https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
Runtime: 104 ms, faster than 65.43% of Python3 online submissions for Sum of Nodes with Even-Valued Grandparent.
Memory Usage: 16.2 MB, less than 100.00% of Python3 online submissions for Sum of Nodes with Even-Valued Grandparent.
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        total = 0
        if root.val%2 == 0:
            if root.left is not None:
                if root.left.left:
                    total += root.left.left.val
                if root.left.right:
                    total += root.left.right.val
            if root.right is not None:
                if root.right.left:
                    total += root.right.left.val
                if root.right.right:
                    total += root.right.right.val
        if root.left is not None:
            total += self.sumEvenGrandparent(root.left)
        if root.right is not None:
            total += self.sumEvenGrandparent(root.right)
        return total
            
