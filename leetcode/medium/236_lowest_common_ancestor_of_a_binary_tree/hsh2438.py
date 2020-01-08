"""
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
Runtime: 72 ms, faster than 37.74% of Python online submissions for Lowest Common Ancestor of a Binary Tree.
Memory Usage: 26.3 MB, less than 7.84% of Python online submissions for Lowest Common Ancestor of a Binary Tree.
"""

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """

        def find_path(root, arr, x):
            if not root:
                return False

            arr.append(root)

            if root == x:
                return True

            if find_path(root.left, arr, x) or find_path(root.right, arr, x):
                return True

            arr.pop()
            return False

        path_p = []
        path_q = []

        find_path(root, path_p, p)
        find_path(root, path_q, q)

        (shorter, longer) = (path_p, path_q) if len(path_p) < len(path_q) else (path_q, path_p)

        for i in range(len(shorter) - 1):
            if shorter[i + 1] != longer[i + 1]:
                return path_p[i]
        return shorter[-1]
