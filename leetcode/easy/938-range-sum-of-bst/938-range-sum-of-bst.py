"""
938-range-sum-of-bst 
leetcode/easy/938. Range Sum of BST
Difficulty: easy
URL: https://leetcode.com/problems/range-sum-of-bst/
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def depth_first_search(self, root):
        if root is None:
            return []

        return [root.val, *self.depth_first_search(root.left), *self.depth_first_search(root.right)]

    def rangeSumBST(self, root, low: int, high: int) -> int:
        return sum(
            filter(lambda x: x if low <= x <= high else 0, sorted(self.depth_first_search(root)))
        )


# one of clever solution
class Solution:
    def rangeSumBST(self, root, low, high):
        def dfs(node):
            if not node: return
            if low <= node.val <= high: self.out += node.val
            if node.val > low:  dfs(node.left)
            if node.val < high: dfs(node.right)

        self.out = 0
        dfs(root)
        return self.out