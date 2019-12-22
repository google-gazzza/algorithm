"""
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
Runtime: 64 ms, faster than 93.08% of Python3 online submissions for Convert Sorted Array to Binary Search Tree.
Memory Usage: 14.8 MB, less than 100.00% of Python3 online submissions for Convert Sorted Array to Binary Search Tree.
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:

        if not nums:
            return None

        length = len(nums)
        half_length = length//2

        root = TreeNode(nums[half_length])
        root.left = self.sortedArrayToBST(nums[:half_length])
        root.right = self.sortedArrayToBST(nums[(half_length+1):])

        return root

