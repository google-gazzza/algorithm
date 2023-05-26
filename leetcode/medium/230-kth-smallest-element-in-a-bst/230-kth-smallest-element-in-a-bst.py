"""
230-kth-smallest-element-in-a-bst 
leetcode/medium/230. Kth Smallest Element in a BST
Difficulty: medium
URL: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
"""

from typing import List


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pre_order_travelling(self, root, values):
        if root:
            values.append(root.val)
            self.pre_order_travelling(root.left, values)
            self.pre_order_travelling(root.right, values)

    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        values = []
        self.pre_order_travelling(root, values)

        return sorted(values)[k - 1]

###############################################################################
# NOTE: Interest Solution
# https://leetcode.com/problems/kth-smallest-element-in-a-bst/discuss/63703/Pythonic-approach-with-generator
###############################################################################
class Solution:
    # @param {TreeNode} root
    # @param {integer} k
    # @return {integer}
    def kthSmallest(self, root, k):
        for val in self.inorder(root):
            if k == 1:
                return val
            else:
                k -= 1

    def inorder(self, root):
        if root is not None:
            for val in self.inorder(root.left):
                yield val
            yield root.val
            for val in self.inorder(root.right):
                yield val
