"""
1315-sum-of-nodes-with-even-valued-grandparent
leetcode/medium/1315. Sum of Nodes with Even-Valued Grandparent
Difficulty: medium
URL: https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
"""


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def sumEvenGrandparent(self, root: TreeNode, parent_val=1, grandparent_val=1) -> int:
        left = self.sumEvenGrandparent(root.left, root.val, parent_val) if root.left else 0
        right = self.sumEvenGrandparent(root.right, root.val, parent_val) if root.right else 0

        return left + right + (root.val if grandparent_val % 2 == 0 else 0)
