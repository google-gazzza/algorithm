"""
https://leetcode.com/problems/kth-smallest-element-in-a-bst/
Runtime: 56 ms, faster than 86.11% of Python3 online submissions for Kth Smallest Element in a BST.
Memory Usage: 18 MB, less than 5.45% of Python3 online submissions for Kth Smallest Element in a BST.
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:

        def search(root, elements):
            if root == None:
                return
            else:
                elements.append(root.val)
                search(root.left, elements)
                search(root.right, elements)

        elements = []
        search(root, elements)

        elements.sort()

        return elements[k - 1]
