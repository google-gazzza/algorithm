"""
617-merge-two-binary-trees
leetcode/easy/617. Merge Two Binary Trees
Difficulty: easy
URL: https://leetcode.com/problems/merge-two-binary-trees/
"""


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def depth_first_search(self, node1, node2):
        node1.val = (node1.val or 0) + (node2.val or 0)

        if node1.left and node2.left:
            self.depth_first_search(node1.left, node2.left)
        elif node1.left is None and node2.left:
            node1.left = node2.left

        if node1.right and node2.right:
            self.depth_first_search(node1.right, node2.right)
        elif node1.right is None and node2.right:
            node1.right = node2.right

    def mergeTrees(self, node1, node2):
        if node1 is None:
            return node2
        if node2 is None:
            return node1

        self.depth_first_search(node1, node2)

        return node1


# best practice
def mergeTrees(self, t1, t2):
    if not t1 and not t2: return None
    ans = TreeNode((t1.val if t1 else 0) + (t2.val if t2 else 0))
    ans.left = self.mergeTrees(t1 and t1.left, t2 and t2.left)
    ans.right = self.mergeTrees(t1 and t1.right, t2 and t2.right)
    return ans
